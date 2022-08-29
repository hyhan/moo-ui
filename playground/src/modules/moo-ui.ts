import Moo from 'moo-ui'
import type { UserModule } from '../types'

export const install: UserModule = app => app.use(Moo)
