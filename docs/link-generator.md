# Link Generator Documentation

## Overview

The Link Generator is a powerful tool that allows you to upload images, videos, and logos to Cloudinary and generate shareable links instantly. This is perfect for content management and when you need quick access to media URLs.

## Features

### 🚀 **Bulk Upload Support**

- Upload multiple files at once using drag & drop
- Supports both images and videos
- Real-time progress tracking for each file

### 📁 **Supported File Types**

- **Images**: JPEG, JPG, PNG, GIF, WebP, SVG
- **Videos**: MP4, AVI, MOV, WMV, FLV, WebM, MKV

### 🔗 **Instant Link Generation**

- Get Cloudinary URLs immediately after upload
- One-click copy to clipboard functionality
- Clear mapping between files and their generated links

### 📱 **Responsive Design**

- Works seamlessly on desktop and mobile devices
- Optimized user interface for all screen sizes

## How to Use

### Step 1: Access the Link Generator

Navigate to `/link-generator` in your LNCT website or click on "Link Generator" in the navigation menu.

### Step 2: Upload Files

1. **Drag & Drop**: Simply drag your files into the upload area
2. **Click to Select**: Click on the upload area to open file browser
3. **Bulk Upload**: Select multiple files at once for batch processing

### Step 3: Generate Links

1. Review your selected files in the "Selected Files" section
2. Click the "Generate Links" button to start uploading to Cloudinary
3. Watch the real-time progress as files are uploaded

### Step 4: Copy Links

1. Once uploaded, links appear in the "Generated Links" section
2. Each file is clearly mapped to its corresponding link
3. Click the "Copy" button next to any link to copy it to your clipboard
4. Use these links anywhere you need to reference your media

## File Organization

- All uploaded files are organized in the `link-generator` folder on Cloudinary
- Files maintain their original names for easy identification
- Automatic file type detection and appropriate handling

## Upload Status Indicators

- **Pending**: File is selected but not yet uploaded
- **Uploading**: File is currently being uploaded to Cloudinary
- **Uploaded**: File successfully uploaded, link available
- **Error**: Upload failed, try again or check file format

## Tips for Best Results

### File Optimization

- Compress large files before uploading for faster processing
- Use descriptive file names for better organization
- Consider file size limits (varies by Cloudinary plan)

### Link Management

- Copy links immediately after generation
- Links are permanent and won't change
- Links work across all platforms and applications

### Bulk Operations

- Upload related files together for efficient workflow
- Use the "Clear All" button to start fresh
- Review the upload summary for quick overview

## Technical Details

### Upload Configuration

- **Destination**: Cloudinary cloud storage
- **Folder**: `link-generator`
- **Resource Type**: Auto-detection (image/video)
- **Upload Preset**: `presentsir`

### Security

- Client-side uploads using unsigned upload preset
- No sensitive credentials exposed in frontend
- Cloudinary handles all security and validation

## Troubleshooting

### Common Issues

1. **Upload Fails**: Check file format and size
2. **Can't Copy Link**: Ensure browser supports clipboard API
3. **Slow Upload**: Check internet connection and file size

### Error Messages

- **File Rejected**: Unsupported file format
- **Upload Failed**: Network or Cloudinary issue
- **Copy Failed**: Browser doesn't support clipboard

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- All modern mobile browsers

## Use Cases

### Content Management

- Generate links for website images
- Create media libraries for easy access
- Share resources across different platforms

### Development

- Quick asset hosting for development projects
- Testing image/video links
- Generating URLs for API responses

### Marketing

- Create shareable media for social campaigns
- Generate links for email marketing assets
- Quick access to brand assets and logos

---

For technical support or feature requests, please contact the development team.
