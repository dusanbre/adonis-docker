import Post from '#models/post'
import type { HttpContext } from '@adonisjs/core/http'

export default class PostsController {
    public async index({ view }: { view: HttpContext['view'] }) {
        const posts = await Post.query().preload('user')

        return view.render('pages/posts/index', { posts })
    }
}