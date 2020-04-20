
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'vue-prism-editor/dist/VuePrismEditor.css'

import Vue from 'vue'
import PrismEditor from 'vue-prism-editor'

import 'prismjs/components/prism-typescript.min'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-c.min'
import 'prismjs/components/prism-cpp.min'
import 'prismjs/components/prism-csharp.min'
import 'prismjs/components/prism-bash.min'
import 'prismjs/components/prism-css.min'
import 'prismjs/components/prism-scss.min'
import 'prismjs/components/prism-kotlin.min'
import 'prismjs/components/prism-dart.min'
import 'prismjs/components/prism-go.min'

Vue.component('PrismEditor', PrismEditor)
