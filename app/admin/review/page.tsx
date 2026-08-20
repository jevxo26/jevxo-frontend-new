"use client";

import { useEffect, useState } from "react";
import { Plus, Edit, Trash2, X, User as UserIcon } from "lucide-react";
import { reviewApi, Review } from "../../../api/reviewApi";
import { userApi, User } from "../../../api/userApi";

export default function AdminReviewPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [clients, setClients] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    clientId: "",
    thumbUrl: "",
    videoUrl: "",
    reviewText: "",
    rating: 5
  });

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const [revs, users] = await Promise.all([
        reviewApi.getAllReviews(),
        userApi.getAllUsers()
      ]);
      setReviews(Array.isArray(revs) ? revs : revs?.data || []);
      
      const allUsers = Array.isArray(users) ? users : users?.data || [];
      // Assuming all users can be clients, or filter by role === 'client' if applicable
      setClients(allUsers);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpenModal = (review?: Review) => {
    if (review) {
      setEditingId(review.id);
      setFormData({
        clientId: review.client?.id || review.clientId || "",
        thumbUrl: review.thumbUrl || "",
        videoUrl: review.videoUrl || "",
        reviewText: review.reviewText || "",
        rating: review.rating || 5
      });
    } else {
      setEditingId(null);
      setFormData({
        clientId: clients.length > 0 ? clients[0].id : "",
        thumbUrl: "",
        videoUrl: "",
        reviewText: "",
        rating: 5
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: name === 'rating' ? parseInt(value) || 5 : value 
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingId) {
        await reviewApi.updateReview(editingId, formData);
      } else {
        await reviewApi.createReview(formData);
      }
      handleCloseModal();
      fetchData();
    } catch (error) {
      console.error("Failed to save review:", error);
      alert("Error saving review. Please try again.");
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      try {
        await reviewApi.deleteReview(id);
        fetchData();
      } catch (error) {
        console.error("Failed to delete review:", error);
        alert("Error deleting review.");
      }
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Manage Reviews</h1>
        <button 
          onClick={() => handleOpenModal()}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Review
        </button>
      </div>

      {isLoading ? (
        <div className="text-center py-12 text-gray-500">Loading reviews...</div>
      ) : (
        <div className="bg-white rounded-lg shadow border overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Review</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {reviews.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-4 text-center text-gray-500">No reviews found. Create one!</td>
                </tr>
              ) : (
                reviews.map((review) => (
                  <tr key={review.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        {review.client?.picture ? (
                          <img src={review.client.picture} alt="" className="w-8 h-8 rounded-full object-cover" />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                            <UserIcon className="w-4 h-4 text-gray-500" />
                          </div>
                        )}
                        <div>
                          <div className="font-medium text-gray-900">{review.client?.name || 'Unknown'}</div>
                          <div className="text-xs text-gray-500">{review.client?.role || 'Client'}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {review.rating} / 5
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      <div className="truncate max-w-xs">{review.reviewText}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button 
                        onClick={() => handleOpenModal(review)}
                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete(review.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white z-10">
              <h2 className="text-xl font-semibold">
                {editingId ? "Edit Review" : "Create New Review"}
              </h2>
              <button onClick={handleCloseModal} className="text-gray-500 hover:text-black">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Client *</label>
                <select
                  name="clientId"
                  required
                  value={formData.clientId}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="" disabled>Select a client...</option>
                  {clients.map(client => (
                    <option key={client.id} value={client.id}>
                      {client.name} ({client.email})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Thumbnail URL</label>
                  <input
                    type="text"
                    name="thumbUrl"
                    value={formData.thumbUrl}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="https://example.com/thumb.png"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Video URL</label>
                  <input
                    type="text"
                    name="videoUrl"
                    value={formData.videoUrl}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="https://youtube.com/..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Rating (1-5)</label>
                <input
                  type="number"
                  name="rating"
                  min="1"
                  max="5"
                  value={formData.rating}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Review Text *</label>
                <textarea
                  name="reviewText"
                  required
                  rows={4}
                  value={formData.reviewText}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="The client's testimonial..."
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t mt-6">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
                >
                  {editingId ? "Save Changes" : "Create Review"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
