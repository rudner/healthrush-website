import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Digital Patient Monitor",
    slug: "digital-patient-monitor",
    category: "Diagnostic",
    shortDescription: "Multi-parameter bedside monitor with real-time vitals tracking.",
    description:
      "The HealthRush Digital Patient Monitor provides accurate, real-time monitoring of critical patient vitals including ECG, SpO2, NIBP, temperature, and respiration rate. Designed for ICU, emergency, and general ward use.",
    image: "/images/products/patient-monitor.jpg",
    badge: "Best Seller",
    features: [
      "12-lead ECG display",
      "SpO2 & NIBP monitoring",
      "10-inch color touchscreen",
      "Nurse call integration",
      "USB data export",
    ],
    specs: {
      "Display Size": "10.1 inches",
      "Battery Life": "4 hours",
      Weight: "3.2 kg",
      Connectivity: "Wi-Fi, LAN, USB",
      Warranty: "2 years",
    },
  },
  {
    id: "2",
    name: "Infusion Pump",
    slug: "infusion-pump",
    category: "ICU",
    shortDescription: "Precision volumetric infusion pump for accurate drug delivery.",
    description:
      "Our infusion pump delivers fluids, medications, and nutrients precisely. Features an anti-free-flow mechanism, occlusion detection, and a large backlit display for ICU and surgical use.",
    image: "/images/products/infusion-pump.jpg",
    badge: "New",
    features: [
      "Anti-free-flow mechanism",
      "Occlusion detection alarm",
      "Backlit LCD display",
      "Drug library with 500+ entries",
      "Secondary piggyback delivery",
    ],
    specs: {
      "Flow Rate Range": "0.1–999 mL/hr",
      "VTBI Range": "0.1–9999 mL",
      Weight: "1.8 kg",
      Alarm: "Audio + Visual",
      Warranty: "2 years",
    },
  },
  {
    id: "3",
    name: "Surgical LED Light",
    slug: "surgical-led-light",
    category: "Surgical",
    shortDescription: "Shadow-free surgical LED with adjustable color temperature.",
    description:
      "A high-intensity, shadow-free LED surgical light with adjustable color temperature (3,500K–5,000K). Provides excellent visibility in the surgical field with minimal heat generation.",
    image: "/images/products/surgical-light.jpg",
    features: [
      "Shadow-free illumination",
      "Adjustable color temperature",
      "100,000-hour LED lifespan",
      "Sterile handle included",
      "Ceiling-mounted arm",
    ],
    specs: {
      Illuminance: "160,000 lux",
      "Color Temperature": "3500–5000K",
      "Color Rendering Index": ">95 Ra",
      "Arm Reach": "1,200 mm",
      Warranty: "3 years",
    },
  },
  {
    id: "4",
    name: "Portable Ultrasound Scanner",
    slug: "portable-ultrasound-scanner",
    category: "Diagnostic",
    shortDescription: "Compact wireless ultrasound for point-of-care diagnostics.",
    description:
      "A lightweight, wireless ultrasound scanner that connects to tablets and smartphones. Ideal for emergency, obstetrics, and point-of-care use in clinics and hospitals.",
    image: "/images/products/ultrasound.jpg",
    badge: "Featured",
    features: [
      "Wireless connectivity",
      "Compatible with iOS & Android",
      "B-mode, M-mode, Color Doppler",
      "1-hour continuous scanning",
      "IP67 waterproof rating",
    ],
    specs: {
      Weight: "280 g",
      "Probe Type": "Convex / Linear",
      "Depth Range": "2–30 cm",
      Connectivity: "Wi-Fi 5GHz",
      Warranty: "1 year",
    },
  },
  {
    id: "5",
    name: "Electric Hospital Bed",
    slug: "electric-hospital-bed",
    category: "Rehabilitation",
    shortDescription: "Full-electric adjustable hospital bed with side rails.",
    description:
      "Full-electric 4-section hospital bed with Trendelenburg, reverse Trendelenburg, head, and foot adjustments. Includes collapsible side rails, IV pole holder, and locking castors.",
    image: "/images/products/hospital-bed.jpg",
    features: [
      "4-section articulation",
      "Trendelenburg & reverse",
      "Collapsible side rails",
      "Locking castors",
      "500 kg load capacity",
    ],
    specs: {
      "Bed Dimensions": "2,050 × 900 mm",
      "Height Range": "450–750 mm",
      "Load Capacity": "500 kg",
      "Mattress Included": "Yes",
      Warranty: "2 years",
    },
  },
  {
    id: "6",
    name: "Autoclave Sterilizer",
    slug: "autoclave-sterilizer",
    category: "Surgical",
    shortDescription: "Class B tabletop autoclave with vacuum cycle for full sterilization.",
    description:
      "A Class B tabletop autoclave with pre-vacuum and post-vacuum cycles for sterilizing hollow and porous instruments. Built-in printer for cycle record documentation.",
    image: "/images/products/autoclave.jpg",
    features: [
      "Class B vacuum cycle",
      "Built-in printer",
      "LCD touchscreen panel",
      "Automatic door lock",
      "Self-diagnostic system",
    ],
    specs: {
      "Chamber Volume": "23 L",
      Temperature: "134°C",
      Pressure: "2.2 bar",
      "Cycle Time": "~30 minutes",
      Warranty: "2 years",
    },
  },
];

export const categories = ["All", "Diagnostic", "ICU", "Surgical", "Rehabilitation"];
