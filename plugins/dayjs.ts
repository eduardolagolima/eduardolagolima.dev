import { locale, extend } from 'dayjs'
import 'dayjs/locale/pt-br'
import utc from 'dayjs/plugin/utc'

locale('pt-br')
extend(utc)
