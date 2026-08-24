'use client'

import { Heading, Newsletter } from '@the_viveksingh/vivek-ui'

/**
 * Speaker-announcement signup.
 *
 * `onSubscribe` returns a promise, so the button holds a busy state until it
 * settles and the form cannot be double-submitted. The result lands in
 * Newsletter's own `aria-live` region — deliberately not also a toast, which
 * would announce the same outcome twice.
 */
export function NewsletterSignup() {
  return (
    <Newsletter
      /* Newsletter renders `title` in a plain div, so the heading is passed in
         explicitly — otherwise this block would have no place in the outline. */
      title={
        <Heading level={2} size="lg">
          Get speaker announcements
        </Heading>
      }
      description="One mail when a batch of speakers is confirmed, and one when the schedule locks. Nothing else."
      label="Email address"
      placeholder="you@company.com"
      buttonLabel="Notify me"
      note="Roughly six mails between now and November. Unsubscribe in one click, no dark patterns."
      successMessage="Done — you are on the list. Check for a confirmation mail."
      errorMessage="That did not go through. Try again, or mail hello@devsummit.example."
      onSubscribe={async () => {
        // Stand-in for your provider's API call.
        await new Promise((resolve) => setTimeout(resolve, 700))
      }}
    />
  )
}
