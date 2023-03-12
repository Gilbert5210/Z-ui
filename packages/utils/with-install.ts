import type { App, Component, Plugin } from 'vue';

export type SFCWithInstall<T> = T & Plugin

export type SFCWithName<T> = T & {
    name: string
}

export const withInstall = <T>(comp: T) => {
    (comp as SFCWithInstall<T>).install = (app: App) => {
        app.component((comp as SFCWithName<T>).name, comp as Component)
    }

    return comp as SFCWithInstall<T>
}