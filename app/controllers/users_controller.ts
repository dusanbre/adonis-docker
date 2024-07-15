import User from '#models/user'
import { loginValidator } from '#validators/login'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  public async login({ request, response, auth, }: { request: HttpContext['request'], response: HttpContext['response'], auth: HttpContext['auth'] }) {
    const { email, password } = await request.validateUsing(loginValidator)

    const user = await User.verifyCredentials(email, password)

    await auth.use('web').login(user)

    response.redirect('/')
  }

  public async index({ view }: { view: HttpContext['view'] }) {
    const users = await User.all()

    return view.render('pages/users/index', { users })
  }
}
