import React, { useState } from 'react';
import { X, Upload, CheckCircle2, Image as ImageIcon, Video, AlertCircle } from 'lucide-react';
import { CLUB_EVENTS } from '../data/galleryData';

interface SubmitMediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (message: string) => void;
}

export const SubmitMediaModal: React.FC<SubmitMediaModalProps> = ({
  isOpen,
  onClose,
  onSuccess
}) => {
  const [selectedEventId, setSelectedEventId] = useState(CLUB_EVENTS[0]?.id || '');
  const [contributorName, setContributorName] = useState('');
  const [contributorRoll, setContributorRoll] = useState('');
  const [mediaTitle, setMediaTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewFiles, setPreviewFiles] = useState<string[]>([]);

  if (!isOpen) return null;

  const handleSimulatedFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    const urls: string[] = [];
    for (let i = 0; i < files.length; i++) {
      urls.push(URL.createObjectURL(files[i]));
    }
    setPreviewFiles((prev) => [...prev, ...urls]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contributorName.trim() || !mediaTitle.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onSuccess(
        `Thank you ${contributorName}! Your media submission for "${mediaTitle}" has been received and forwarded to CC FOET media team.`
      );
      onClose();
      setContributorName('');
      setContributorRoll('');
      setMediaTitle('');
      setCaption('');
      setPreviewFiles([]);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#1d1b2e]/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg bg-[#faf7ef] border-3 border-[#1d1b2e] shadow-[8px_8px_0px_#1d1b2e] p-6 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b-2 border-[#1d1b2e]">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 text-xs font-display font-black bg-[#ffd166] text-[#1d1b2e] border-2 border-[#1d1b2e]">
              UPLOAD
            </span>
            <h3 className="font-display font-black text-lg text-[#6c233d]">
              Contribute Event Media
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 bg-white border-2 border-[#1d1b2e] shadow-[2px_2px_0px_#1d1b2e] hover:bg-[#ff6b5b] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 pt-4 text-xs font-medium">
          {/* Select Event */}
          <div>
            <label className="block text-[#1d1b2e] font-bold mb-1">
              Select Related Event *
            </label>
            <select
              value={selectedEventId}
              onChange={(e) => setSelectedEventId(e.target.value)}
              className="w-full px-3 py-2 bg-white border-2 border-[#1d1b2e] shadow-[2px_2px_0px_#1d1b2e] text-[#1d1b2e] focus:outline-none focus:border-[#6c233d] text-xs font-semibold"
            >
              {CLUB_EVENTS.map((ev) => (
                <option key={ev.id} value={ev.id}>
                  {ev.year} · {ev.title} ({ev.date})
                </option>
              ))}
            </select>
          </div>

          {/* Contributor Details */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[#1d1b2e] font-bold mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={contributorName}
                onChange={(e) => setContributorName(e.target.value)}
                placeholder="e.g. Rahul Verma"
                className="w-full px-3 py-2 bg-white border-2 border-[#1d1b2e] shadow-[2px_2px_0px_#1d1b2e] text-[#1d1b2e] placeholder-[#6e6b7c] focus:outline-none focus:border-[#6c233d] text-xs"
              />
            </div>
            <div>
              <label className="block text-[#1d1b2e] font-bold mb-1">
                Roll Number / Branch
              </label>
              <input
                type="text"
                value={contributorRoll}
                onChange={(e) => setContributorRoll(e.target.value)}
                placeholder="e.g. 23001011004"
                className="w-full px-3 py-2 bg-white border-2 border-[#1d1b2e] shadow-[2px_2px_0px_#1d1b2e] text-[#1d1b2e] placeholder-[#6e6b7c] focus:outline-none focus:border-[#6c233d] text-xs"
              />
            </div>
          </div>

          {/* Media Title */}
          <div>
            <label className="block text-[#1d1b2e] font-bold mb-1">
              Moment Title / Caption *
            </label>
            <input
              type="text"
              required
              value={mediaTitle}
              onChange={(e) => setMediaTitle(e.target.value)}
              placeholder="e.g. Lab 2 debugging sprint or CodeFiesta prototype demo"
              className="w-full px-3 py-2 bg-white border-2 border-[#1d1b2e] shadow-[2px_2px_0px_#1d1b2e] text-[#1d1b2e] placeholder-[#6e6b7c] focus:outline-none focus:border-[#6c233d] text-xs"
            />
          </div>

          {/* File Upload Box */}
          <div>
            <label className="block text-[#1d1b2e] font-bold mb-1">
              Upload Images or Video Snippets
            </label>
            <div className="border-2 border-dashed border-[#1d1b2e] bg-white p-4 text-center cursor-pointer hover:bg-[#faf7ef] transition-colors">
              <input
                type="file"
                multiple
                accept="image/*,video/*"
                onChange={handleSimulatedFileUpload}
                id="media-upload-input"
                className="hidden"
              />
              <label
                htmlFor="media-upload-input"
                className="cursor-pointer flex flex-col items-center justify-center gap-1"
              >
                <div className="flex items-center gap-2 text-[#6c233d]">
                  <ImageIcon className="w-5 h-5" />
                  <Video className="w-5 h-5" />
                </div>
                <span className="text-[#1d1b2e] font-bold text-xs">
                  Click to select photos/videos
                </span>
                <span className="text-[10px] text-[#6e6b7c]">
                  Supports JPG, PNG, MP4 up to 50MB
                </span>
              </label>

              {previewFiles.length > 0 && (
                <div className="mt-3 flex items-center justify-center gap-2 overflow-x-auto">
                  {previewFiles.map((url, i) => (
                    <img
                      key={i}
                      src={url}
                      alt="Upload preview"
                      className="w-12 h-10 object-cover border-2 border-[#1d1b2e] shadow-[2px_2px_0px_#1d1b2e]"
                    />
                  ))}
                  <span className="text-xs font-bold text-[#6c233d]">
                    +{previewFiles.length} files
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 p-2 bg-[#ffd166]/20 border border-[#1d1b2e] text-[11px] text-[#1d1b2e]">
            <AlertCircle className="w-4 h-4 text-[#6c233d] shrink-0" />
            <span>
              All uploads are reviewed by the Coding Connoisseurs Media Wing before going live.
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t-2 border-[#1d1b2e]">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-[#6e6b7c] hover:text-[#1d1b2e] cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-brutal-yellow px-5 py-2.5 text-xs font-display flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isSubmitting ? 'Uploading...' : 'Submit to Club Archive'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
