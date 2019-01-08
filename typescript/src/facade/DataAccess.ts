export default class DataAccess {
  private constructor() {}
  static getArticle(id: number): Object {
    return {
      title: '記事のタイトル',
      contents: `
                ウィジウィグで入力したやつなんだろうね。
            `,
      id: id,
      related: [1, 2, 3]
    }
  }
}
