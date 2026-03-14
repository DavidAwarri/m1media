import { LinkAccountsCard } from "@/components/feature-cards/link-accounts-card"
import { PaymentRolesCard } from "@/components/feature-cards/payment-roles-card"
import { SendFundsCard } from "@/components/feature-cards/send-funds-card"

export function FeaturesSection() {
  return (
    <section className="px-4 md:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        <LinkAccountsCard />
        <PaymentRolesCard />
        <SendFundsCard />
      </div>
    </section>
  )
}
