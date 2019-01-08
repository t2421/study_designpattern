import DataAccess from './DataAccess'
import HtmlWriter from './HtmlWriter'

export default class PageMaker {
  private constructor() {}
  static createPostPage() {
    let post = DataAccess.getArticle(5)
    let relatedId = post['related']
    let relatedPosts = []
    relatedId.map(id => {
      relatedPosts.push(DataAccess.getArticle(id))
    })
    let html = ''
    html = HtmlWriter.getHtml(post)
    html += `<div class="related">
            ${HtmlWriter.getRelatedHtml(relatedPosts)}
        </div>
        `
    console.log(html)
  }
}
