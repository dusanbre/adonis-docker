/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/


import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'

const UsersController = () => import('#controllers/users_controller')
const PostsController = () => import('#controllers/posts_controller')

router.get('/login', ({ view }) => view.render('pages/users/login'))
router.post('/login', [UsersController, 'login']).as('login')

router
    .group(() => {
        router.get('/', ({ view }) => view.render('pages/home')).as('home')
        router.get('/users', [UsersController, 'index']).as('users.index')

        router.get('/posts', [PostsController, 'index']).as('posts.index')
    })
    .use(middleware.auth())
