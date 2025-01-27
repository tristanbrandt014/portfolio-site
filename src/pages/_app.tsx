import type { AppType } from "next/app";
import posthog from "posthog-js";
import { clientEnv } from "../env/schema.mjs";


if (typeof window !== 'undefined') { // checks that we are client-side
  posthog.init(clientEnv.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
    person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.debug() // debug mode in development
    },
  })
}

const App: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
