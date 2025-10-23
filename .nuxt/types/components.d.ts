
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  'Dialog': typeof import("../../app/components/global/dialog.vue")['default']
  'Loading': typeof import("../../app/components/global/loading.vue")['default']
  'Snackbar': typeof import("../../app/components/global/snackbar.vue")['default']
  'Iconify': typeof import("../../app/components/iconify.vue")['default']
  'NuxtWelcome': typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/app/components/welcome.vue")['default']
  'NuxtLayout': typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  'NuxtErrorBoundary': typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  'ClientOnly': typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/app/components/client-only")['default']
  'DevOnly': typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/app/components/dev-only")['default']
  'ServerPlaceholder': typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/app/components/server-placeholder")['default']
  'NuxtLink': typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/app/components/nuxt-link")['default']
  'NuxtLoadingIndicator': typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  'NuxtTime': typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  'NuxtRouteAnnouncer': typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  'NuxtImg': typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
  'NuxtPicture': typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
  'NuxtPage': typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/pages/runtime/page")['default']
  'NoScript': typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/head/runtime/components")['NoScript']
  'Link': typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/head/runtime/components")['Link']
  'Base': typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/head/runtime/components")['Base']
  'Title': typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/head/runtime/components")['Title']
  'Meta': typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/head/runtime/components")['Meta']
  'Style': typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/head/runtime/components")['Style']
  'Head': typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/head/runtime/components")['Head']
  'Html': typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/head/runtime/components")['Html']
  'Body': typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/head/runtime/components")['Body']
  'NuxtIsland': typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/app/components/nuxt-island")['default']
  'LazyDialog': LazyComponent<typeof import("../../app/components/global/dialog.vue")['default']>
  'LazyLoading': LazyComponent<typeof import("../../app/components/global/loading.vue")['default']>
  'LazySnackbar': LazyComponent<typeof import("../../app/components/global/snackbar.vue")['default']>
  'LazyIconify': LazyComponent<typeof import("../../app/components/iconify.vue")['default']>
  'LazyNuxtWelcome': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  'LazyNuxtLayout': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  'LazyNuxtErrorBoundary': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  'LazyClientOnly': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/app/components/client-only")['default']>
  'LazyDevOnly': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/app/components/dev-only")['default']>
  'LazyServerPlaceholder': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  'LazyNuxtLink': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  'LazyNuxtTime': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  'LazyNuxtImg': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
  'LazyNuxtPicture': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
  'LazyNuxtPage': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/pages/runtime/page")['default']>
  'LazyNoScript': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  'LazyLink': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/head/runtime/components")['Link']>
  'LazyBase': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/head/runtime/components")['Base']>
  'LazyTitle': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/head/runtime/components")['Title']>
  'LazyMeta': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/head/runtime/components")['Meta']>
  'LazyStyle': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/head/runtime/components")['Style']>
  'LazyHead': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/head/runtime/components")['Head']>
  'LazyHtml': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/head/runtime/components")['Html']>
  'LazyBody': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/head/runtime/components")['Body']>
  'LazyNuxtIsland': LazyComponent<typeof import("../../node_modules/.pnpm/nuxt@4.1.3_@parcel+watcher@2.5.1_@types+node@18.19.130_@vue+compiler-sfc@3.5.22_db0@0.3_b4022db8bb3e78313f6154ae71141381/node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
