import { useNavigate } from 'react-router-dom'
import { Tag } from '../../Tag'
import './photo-preview-footer.css'

interface PhotoPreviewFooterProps {
  author: string
  date: string
  tags: string[]
}

export const PhotoPreviewFooter = ({ author, date, tags }: PhotoPreviewFooterProps) => {
  const navigate = useNavigate()

  const onClickTag = (tag: string) => {
    navigate(`/tag/${tag}`)
  }

  return (
    <div className="footer-container" data-testid="photo-preview-footer-container" id="photo-preview-footer-container">
      <div className="info-container">
        <div data-testid="photo-preview-author" id="photo-preview-author">
          by <b>{author}</b>
        </div>
        <div data-testid="photo-preview-date" id="photo-preview-date">
          Taken {date}
        </div>
      </div>
      <div className="tags-container">
        {tags.slice(0, 3).map((tag, index) => (
          <Tag
            name={tag}
            data-testid={`tag-${index}`}
            key={`tag-${index}`}
            id={`tag-${index}`}
            onClick={() => onClickTag(tag)}
          />
        ))}
      </div>
    </div>
  )
}
