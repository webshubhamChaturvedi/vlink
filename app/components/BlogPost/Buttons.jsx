import DownloadIcon from 'app/components/icons/DownloadIcon'
import PrintIcon from 'app/components/icons/PrintIcon'
import SaveIcon from 'app/components/icons/SaveIcon,'
import ShareIcon from 'app/components/icons/ShareIcon'
import BlogPostButton from './Button'

export default function Buttons() {
  return (
    <div className="flex space-x-3">
      <BlogPostButton>
        <ShareIcon className="mx-auto" />
        <span>Share</span>
      </BlogPostButton>
      <BlogPostButton>
        <PrintIcon className="mx-auto" />
        <span>Print</span>
      </BlogPostButton>
      <BlogPostButton>
        <DownloadIcon className="mx-auto" />
        <span>Download</span>
      </BlogPostButton>
      <BlogPostButton>
        <SaveIcon className="mx-auto" />
        <span>Save</span>
      </BlogPostButton>
    </div>
  )
}
