import { withInstall } from '@zjy-ui/utils';
import type { App } from 'vue'
import Button from './src'

const ZButton = withInstall(Button)

export type { ButtonProps } from './src/const'
export { ZButton }
export default ZButton