import { ReactNode } from 'react'
import './photo-preview.css'
import { PhotoPreviewFooter } from './PhotoPreviewFooter'

interface PhotoPreviewProps {
  src: string
  alt?: string
  width?: number
  height?: number
  author: string
  date: Date
  tags: string[]
}

export const PhotoPreview = ({ src, author, date, tags, alt, width, height }: PhotoPreviewProps): ReactNode => {
  return (
    <div className="photo-preview-container" data-testid="photo-preview-container" id="photo-preview-container">
      <img
        src={src}
        className="photo-src"
        data-testid="photo-src"
        id="photo-src"
        alt={alt}
        // needed hack for better ui, style should be avoided as possible when coding
        style={{ aspectRatio: width && height ? width / height : undefined }}
      />
      <PhotoPreviewFooter author={author} date={date} tags={tags} />
    </div>
  )
}
