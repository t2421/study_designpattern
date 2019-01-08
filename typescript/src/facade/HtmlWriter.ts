export default class HtmlWriter {
  constructor() {}

  static getHtml(post: Object): string {
    return `
            <div class="article" data-id="${post['id']}">
            <h1>${post['title']}</h1>
            <div class="contents">
            ${post['contents']}
            </div>
            </div>
        `
  }
  static getRelatedHtml(posts: Array<Object>): string {
    let html: string = ''
    posts.map(post => {
      html += HtmlWriter.getHtml(post)
    })
    return html
  }
}
