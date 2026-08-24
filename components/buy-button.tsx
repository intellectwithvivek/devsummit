'use client'

import { Button, useToast } from '@the_viveksingh/vivek-ui'

/**
 * The "Buy" control on every ticket tier.
 *
 * No checkout is wired up — this is a template — so it says so in a toast rather
 * than pretending. The toast id is the tier, so hammering one button replaces its
 * toast in place instead of stacking five identical ones.
 */
export function BuyButton({
  tier,
  price,
  variant = 'solid',
  fullWidth = true,
}: {
  tier: string
  price: string
  variant?: 'solid' | 'outline'
  fullWidth?: boolean
}) {
  const { toast } = useToast()

  return (
    <Button
      variant={variant}
      fullWidth={fullWidth}
      onClick={() =>
        toast({
          id: `buy-${tier}`,
          tone: 'info',
          title: 'Demo — no checkout wired up',
          description: `${tier} at ${price} would go to your payment provider here. Point this button at it and the template is done.`,
        })
      }
    >
      Buy {tier}
    </Button>
  )
}
