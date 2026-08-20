"use client";

import React, { useEffect, useState } from 'react';
import { contactApi, ContactData } from '@/api/contactApi';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/ui/table';
import { Loader2, Trash2 } from 'lucide-react';

export default function ContactsManagementPage() {
  const [contacts, setContacts] = useState<ContactData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchContacts = async () => {
    setIsLoading(true);
    try {
      const response = await contactApi.getAllContacts();
      setContacts(response.data || response || []);
    } catch (error) {
      console.error('Failed to fetch contacts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this contact message?')) return;

    try {
      await contactApi.deleteContact(id);
      fetchContacts();
    } catch (error) {
      console.error('Failed to delete contact:', error);
      alert('Failed to delete contact message.');
    }
  };

  return (
    <div className="p-6 w-full mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Contact Messages
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          View and manage inquiries from the landing page contact form.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm">
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email / WhatsApp</TableHead>
                <TableHead>Budget</TableHead>
                <TableHead>Details</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.length > 0 ? (
                contacts.map((contact) => (
                  <TableRow key={contact.id}>
                    <TableCell className="whitespace-nowrap text-sm text-gray-500">
                      {contact.createdAt ? new Date(contact.createdAt).toLocaleDateString() : 'N/A'}
                    </TableCell>
                    <TableCell className="font-medium">{contact.fullName}</TableCell>
                    <TableCell>
                      <div>{contact.email}</div>
                      {contact.whatsapp && <div className="text-xs text-gray-500">WA: {contact.whatsapp}</div>}
                    </TableCell>
                    <TableCell>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                        {contact.budget}
                      </span>
                    </TableCell>
                    <TableCell className="max-w-xs truncate" title={contact.productDetails}>
                      {contact.productDetails}
                    </TableCell>
                    <TableCell className="text-right">
                      <button
                        onClick={() => contact.id && handleDelete(contact.id)}
                        className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors"
                        title="Delete Message"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center h-32 text-gray-500">
                    No contact messages found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}
