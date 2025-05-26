# LNCT Admin Interface

A comprehensive admin interface for managing colleges, schools, and firms with Cloudinary integration for file uploads.

## Features

- 📚 **College Management**: Create, read, update, and delete college entries
- 🏫 **School Management**: Manage school institutions
- 🏢 **Firm Management**: Handle firm/company data
- 📸 **File Uploads**: Cloudinary integration for images and videos
- 📊 **Dashboard**: Statistics and overview of all entities
- 🎨 **Modern UI**: Clean, responsive design with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 15.3.2
- **Database**: MongoDB with Prisma ORM
- **File Storage**: Cloudinary
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Forms**: React Hook Form with Zod validation

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB database
- Cloudinary account

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd lnct
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env` file in the root directory with:

```env
# Database
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/lnct?retryWrites=true&w=majority&appName=AppName

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

4. Generate Prisma client:

```bash
npx prisma generate
```

5. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Deployment on Vercel

### Environment Variables

Set the following environment variables in your Vercel dashboard:

- `DATABASE_URL`: Your MongoDB connection string
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`: Your Cloudinary cloud name
- `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET`: Your Cloudinary upload preset
- `CLOUDINARY_API_KEY`: Your Cloudinary API key (optional for server-side uploads)
- `CLOUDINARY_API_SECRET`: Your Cloudinary API secret (optional for server-side uploads)

### Deploy

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set the environment variables
4. Deploy!

The build process will automatically:

- Generate the Prisma client
- Build the Next.js application
- Deploy to Vercel's edge network

## Admin Interface

Access the admin interface at `/admin` to:

- View dashboard with statistics
- Manage colleges at `/admin/colleges`
- Manage schools at `/admin/school`
- Manage firms at `/admin/firms`

### Features per Entity

**Colleges**:

- Basic information (name, description, website)
- Logo upload
- Multiple contact numbers
- Location coordinates
- Photo galleries
- Event photos and videos
- Course listings with logos
- Partner company information

**Schools & Firms**:

- Similar to colleges but without courses and companies
- Streamlined interface for educational institutions and businesses

## File Upload Structure

Files are organized in Cloudinary folders:

- `lnct/` - General uploads
- `lnct/courses/` - Course logos
- `lnct/companies/` - Company logos

## API Endpoints

- `GET/POST /api/admin/colleges` - List/Create colleges
- `GET/PUT/DELETE /api/admin/colleges/[id]` - Individual college operations
- `GET/POST /api/admin/schools` - List/Create schools
- `GET/PUT/DELETE /api/admin/schools/[id]` - Individual school operations
- `GET/POST /api/admin/firms` - List/Create firms
- `GET/PUT/DELETE /api/admin/firms/[id]` - Individual firm operations
- `GET /api/admin/stats` - Dashboard statistics
- `POST /api/upload` - File upload endpoint

## Development

### Database Schema

The application uses MongoDB with Prisma. Key models:

- `College` - College institutions
- `School` - School institutions
- `Firm` - Business firms

Each model includes:

- Basic information fields
- File upload arrays (photos, event media)
- Location data
- Contact information

### File Uploads

Two upload components are available:

- `FileUpload` - Multi-file drag & drop uploads
- `SingleFileUpload` - Single file uploads with preview

Both integrate directly with Cloudinary for seamless file management.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
