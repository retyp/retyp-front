import Vue from 'vue'

import SquareLogo from '@/components/brand/SquareLogo'

import Modal from '@/components/theme/Modal'
import Tooltip from '@/components/theme/Tooltip'
import LoadingPlaceholder from '@/components/theme/LoadingPlaceholder'

import LeftSidebar from '@/components/layout/left-sidebar/LeftSidebar'
import LeftSidebarItem from '@/components/layout/left-sidebar/LeftSidebarItem'

import RightSidebar from '@/components/layout/right-sidebar/RightSidebar'
import RightSidebarFooter from '@/components/layout/right-sidebar/RightSidebarFooter'

import PasteHeader from '@/components/layout/PasteHeader'

// Brand components
Vue.component('SquareLogo', SquareLogo)

// Layout components
Vue.component('Modal', Modal)
Vue.component('Tooltip', Tooltip)
Vue.component('LoadingPlaceholder', LoadingPlaceholder)

Vue.component('LeftSidebar', LeftSidebar)
Vue.component('LeftSidebarItem', LeftSidebarItem)

Vue.component('RightSidebar', RightSidebar)
Vue.component('RightSidebarFooter', RightSidebarFooter)

Vue.component('PasteHeader', PasteHeader)
