import { ReactNode } from 'react'
import './photo-preview.css'
import { PhotoPreviewFooter } from './PhotoPreviewFooter'

interface PhotoPreviewProps {
  src: string
  alt?: string
  author: string
  date: string
  tags: string[]
}

export const PhotoPreview = ({ src, author, date, tags, alt }: PhotoPreviewProps): ReactNode => {
  return (
    <div className="photo-preview-container" data-testid="photo-preview-container" id="photo-preview-container">
      <img src={src} className="photo-src" data-testid="photo-src" id="photo-src" alt={alt} />
      <PhotoPreviewFooter author={author} date={date} tags={tags} />
    </div>
  )
}
