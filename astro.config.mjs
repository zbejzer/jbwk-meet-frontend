// @ts-check

import sitemap from '@astrojs/sitemap'
import alpinejs from '@astrojs/alpinejs'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
    site: 'https://meet.jbwk.pl',
    redirects: {
        '/meet-2025-rejestracja':
            'https://docs.google.com/forms/d/e/1FAIpQLSd2968UPuHfbYiEdGpKMndIxNjF5kFr_E8OLsrs5ZBR6KYOuQ/viewform',
        '/meet-2026-rejestracja': 'https://forms.gle/bfRhUFYgonxFb74Z6',
    },

    integrations: [sitemap(), alpinejs()],
})
