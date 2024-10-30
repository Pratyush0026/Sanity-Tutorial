import { defineType, defineField } from "sanity";

export const about = defineType({
  name: 'about',
  type: 'document',
  title: 'About',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Section Title',
      description: 'Title of the About Us section',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Main description text for the About Us section',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'quote',
      type: 'string',
      title: 'Quote',
      description: 'Inspirational quote or tagline',
      validation: Rule => Rule.required()
    })
  ]
});
