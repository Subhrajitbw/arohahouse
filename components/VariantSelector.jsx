// components/VariantSelector.jsx
import React from 'react'
import { Stack, Card, Text, Select } from '@sanity/ui'

export default function VariantSelector(props) {
  const { value, onChange, document } = props
  const variantRefs = document?.variantRefs || []

  if (!variantRefs || variantRefs.length === 0) {
    return (
      <Card padding={3} radius={2} tone="caution">
        <Text size={1}>
          ⚠️ No variants synced yet. Sync products from Medusa first.
        </Text>
      </Card>
    )
  }

  const options = variantRefs.map(v => {
    const optionsText = v.options?.map(o => o.value).join(' / ') || v.variantTitle || 'Default'
    return {
      value: v.variantId,
      label: `${optionsText} (SKU: ${v.sku || 'N/A'})`
    }
  })

  return (
    <Stack space={2}>
      <Select
        value={value || ''}
        onChange={(e) => onChange(e.currentTarget.value)}
      >
        <option value="">-- Select a variant --</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </Select>
    </Stack>
  )
}
