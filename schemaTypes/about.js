import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    // 1. Image Field (Optional by default)
    defineField({
      name: 'mainImage',
      title: 'Main Image (Photo)',
      type: 'image',
      options: {
        hotspot: true, // Allows cropping
      },
      description: 'Upload a photo if you want a static image.',
    }),
    // 2. Video Field (Optional by default)
    defineField({
      name: 'video',
      title: 'Hero Video',
      type: 'file', // Use 'file' type for videos
      options: {
        accept: 'video/*', // Only accept video files
      },
      description: 'Upload a video (MP4/WebM) to replace the image. If both are present, video usually takes priority.',
    }),
  ],
})
