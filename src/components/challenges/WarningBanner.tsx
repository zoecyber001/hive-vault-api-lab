
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const WarningBanner: React.FC = () => {
  return (
    <div className="bg-hive/20 py-2 px-4 rounded flex items-center mb-6">
      <AlertTriangle className="h-4 w-4 text-hive mr-2" />
      <p className="text-sm">Warning: These challenges are designed to teach API security concepts.</p>
    </div>
  );
};

export default WarningBanner;
