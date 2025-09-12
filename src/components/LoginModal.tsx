import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useAuth } from '../context/AuthContext';

/**
 * @author ChebroluVirajith
 * @lastModified 2025-07-24 18:21:02
 * Login modal component
 */

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  // The 'login' function does not exist in the current AuthContext.
  // The application uses a single sign-in/sign-up flow via Google.
  // This component is not currently used in the navigation.
  const { } = useAuth();
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-background glass">
        <DialogHeader>
          <DialogTitle className="text-gradient">Login to KreatorKart</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-muted-foreground text-sm text-center">
            Login is currently handled through the Google Sign-In option.
          </p>
          <Button
            onClick={onClose}
            className="w-full gradient-neon text-white hover:scale-105 transition-transform duration-300"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;