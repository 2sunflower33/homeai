"use client";

import { useEffect, useRef, useState } from "react";
import ChatItem from "./chat-item";
import MessageItemCard from "./message-item-card";
import MessageItemTable from "./message-item-table";
import { PropertyDetail } from '../../chat-section';
import { JSONValue } from "ai";
import OfferList from "./chat-offer-vertical-list";
import { ChatOfferForm } from "./form/chat-offer-form";
import { Button } from 'primereact/button';
import Hero from "./hero";

export enum Stage {
  SEARCHING,
  VIEWING_DETAILS,
  LISTING_OFFER,
  WRITING_OFFER,
}
export interface Message {
  id: string;
  content: string;
  role: string;
  data?: JSONValue;
}

export interface Content {
  text?: string;
  propertyDetails?: PropertyDetail[];
}

const messages = [
  {
    id: '4',
    content: 'end',
    role: 'b',
    data: {
        propertyDetails: [
          {
            "price": "$1,617,400",
            "house_address": "1952 Camargo Dr, San Jose",
            "property_tax": 8833.0,
            "house_size": "1,918 sq ft",
            "lot_size": "6,114 sq ft",
            "bedroom_numbers": 4,
            "bathroom_numbers": 2,
            "upgrades": [
              {
                "year_of_upgrade": 1970,
                "what_was_done": "Construction of the house",
                "does_it_have_permit": true
              },
              {
                "year_of_upgrade": 1970,
                "what_was_done": "Exterior stucco",
                "does_it_have_permit": true
              },
              {
                "year_of_upgrade": 1970,
                "what_was_done": "Installation of wood shake roof",
                "does_it_have_permit": true
              }
            ]
          },
          {
            "price": "$1,538,200",
            "house_address": "2614 Coronet Blvd Belmont CA 94002-1629 San Mateo County",
            "property_tax": 9210.0,
            "house_size": "1920 sq ft",
            "lot_size": "6250 sq ft",
            "bedroom_numbers": 3,
            "bathroom_numbers": 2,
            "upgrades": []
          },
          {
            "price": "$1,899,000",
            "house_address": "719 Broadmoor Dr San Jose",
            "property_tax": 21503.0,
            "house_size": "1324 sq ft",
            "lot_size": "6098 sq ft",
            "bedroom_numbers": 3,
            "bathroom_numbers": 2,
            "upgrades": []
          }
        ],
        majorConcerns: [
          [
            {
              "area_section": "Exterior",
              "issue": "Water damage to roof eaves/sheathing and rafters",
              "recommendation": "Consult a licensed general contractor or structural pest control company for repair."
            },
            {
              "area_section": "Electrical",
              "issue": "Reversed polarity in one or more outlets and inoperative outlets at exterior left side and rear patio",
              "recommendation": "Investigate and correct the wiring, recommend testing of every outlet."
            },
            {
              "area_section": "Plumbing",
              "issue": "Cracked and leaking plastic drain pipe under the kitchen",
              "recommendation": "Repair or replace the piping."
            },
            {
              "area_section": "Foundation",
              "issue": "Efflorescence on portions of the foundation walls indicating moisture",
              "recommendation": "Improve exterior drainage."
            },
            {
              "area_section": "Structure",
              "issue": "Minor cracks observed in foundation walls indicating some settlement",
              "recommendation": "Consult a licensed foundation contractor for further evaluation."
            }
          ],
          [
            {
              "area_section": "Exterior",
              "issue": "Water damage at rear door porch and rafters at the front; uneven, cracked sections of the patio and driveway presenting trip hazards.",
              "recommendation": "Consult a licensed general contractor or structural pest control company for repair and safety improvements."
            },
            {
              "area_section": "Plumbing",
              "issue": "Leaking sink drain in garage and leaking faucet; toilet in hall bathroom leaks.",
              "recommendation": "Repair leaks to prevent water damage and potential mold growth."
            },
            {
              "area_section": "Electrical",
              "issue": "Improper connections outside of a junction box; evidence of periodic moisture entry/rust in main and branch electrical panel.",
              "recommendation": "Make all connections inside approved junction boxes and evaluate/improve electrical panel by a licensed electrical contractor."
            },
            {
              "area_section": "Interior",
              "issue": "Water damage in downstairs bedroom; the kitchen countertop is water damaged.",
              "recommendation": "Investigate source of water damage and repair affected areas to prevent mold growth and further structural damage."
            },
            {
              "area_section": "Foundation",
              "issue": "Crawl space very damp with evidence of surface pooling of water.",
              "recommendation": "Install drainage at the lowest level of the crawl space and consult a qualified soils & drainage expert."
            }
          ]
        ],
        "offer_html_str": "<pre><code># California Residential Purchase Agreement\n</code></pre>\n<p><strong>1. OFFER:</strong><br />\nYina Qiao (\"Buyer\") offers to buy the property at the address provided, subject to the terms and conditions set forth in this agreement.</p>\n<p><strong>2. PURCHASE PRICE:</strong><br />\nThe purchase price shall be One Million Six Hundred Fifty Thousand Dollars ($1,650,000).</p>\n<p><strong>3. FINANCING:</strong></p>\n<ul>\n<li><strong>3.1 INITIAL DEPOSIT:</strong> Buyer shall deposit the sum of Three Hundred Thirty Thousand Dollars ($330,000) into escrow within 3 business days following acceptance of this offer.</li>\n<li><strong>3.2 BALANCE OF DOWN PAYMENT:</strong> The balance of the down payment, in addition to the initial deposit, to comply with the financing terms below.</li>\n<li><strong>3.3 LOAN:</strong> Buyer intends to obtain a loan for the balance of the purchase price.</li>\n</ul>\n<p><strong>4. TERMS OF LOAN:</strong></p>\n<ul>\n<li><strong>4.1 LOAN AMOUNT:</strong> The loan amount will be the difference between the purchase price and the sum of the initial deposit and balance of down payment.</li>\n<li><strong>4.2 LOAN TYPE:</strong> Conventional, Fixed Rate.</li>\n</ul>\n<p><strong>5. CONTINGENCIES:</strong></p>\n<ul>\n<li><strong>5.1 FINANCING CONTINGENCY:</strong> This offer is contingent upon Buyer obtaining a loan approval for the financing described above within 21 days of acceptance.</li>\n<li><strong>5.2 APPRAISAL CONTINGENCY:</strong> This offer is contingent upon the property appraising at or above the purchase price within 17 days of acceptance.</li>\n<li><strong>5.3 INSPECTION CONTINGENCY:</strong> Buyer has the right to conduct inspections of the property within 17 days of acceptance.</li>\n</ul>\n<p><strong>6. CLOSING AND POSSESSION:</strong></p>\n<ul>\n<li><strong>6.1 CLOSING DATE:</strong> Closing shall occur no later than 30 days after acceptance of this offer or 5 days after removal of all contingencies, whichever is later.</li>\n<li><strong>6.2 POSSESSION:</strong> Buyer shall take possession of the property upon closing.</li>\n</ul>\n<p><strong>7. SELLER’S DISCLOSURES:</strong><br />\nSeller shall provide all disclosures required by law regarding the condition of the property and any known material facts that may affect the property's value.</p>\n<p><strong>8. FINAL WALK-THROUGH:</strong><br />\nBuyer shall have the right to a final walk-through of the property within 5 days before closing.</p>\n<p><strong>9. OFFER EXPIRATION:</strong><br />\nThis offer shall expire if not accepted by the seller within 3 days of its date.</p>\n<p><strong>10. ADDITIONAL TERMS:</strong></p>\n<ul>\n<li><strong>10.1 PRICE NEGOTIATION:</strong> Buyer is open to negotiating the price based on the property's condition or appraisal.</li>\n<li><strong>10.2 OTHER:</strong> Any additional terms or conditions will be attached as addenda to this agreement.</li>\n</ul>\n<p><strong>11. ACCEPTANCE:</strong><br />\nThis offer is hereby submitted on [insert date of submission]. Buyer awaits seller's acceptance.</p>\n<p><strong>Buyer:</strong></p>\n<ul>\n<li>Name: Yina Qiao</li>\n<li>Signature: ______________________</li>\n<li>Date: ______________________</li>\n</ul>\n<p><strong>Seller:</strong></p>\n<ul>\n<li>Signature: ______________________</li>\n<li>Date: ______________________</li>\n</ul>\n"
      }
      
  },
];

export default function ChatMessages({
  // messages,
  isLoading,
  reload,
  stop,
  stage,
  setStage,
}: {
  messages: Message[];
  isLoading?: boolean;
  stop?: () => void;
  reload?: () => void;
  stage: Stage;
  setStage: (stage: Stage) => void;
}) {
  const addToFavorites = (propertyDetail: PropertyDetail) => {
    setOfferListData([...offerListData, propertyDetail]);
  };

  const [offerListData, setOfferListData] = useState<PropertyDetail[]>([
    // messages[0].data.propertyDetails, messages[0].data.propertyDetails, messages[0].data.propertyDetails

  ]);

  const scrollableChatContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollableChatContainerRef.current) {
      scrollableChatContainerRef.current.scrollTop =
        scrollableChatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages.length]);

console.log("chat-messages.tsx:106", messages);

  return (
    <>
    <div className="w-full max-w-5xl p-4 bg-white rounded-xl shadow-xl">
      <div className="flex flex-col gap-5 divide-y h-[50vh] overflow-scroll"
        ref={scrollableChatContainerRef}
      >
        {stage === Stage.SEARCHING && (<Hero />)}

        {stage === Stage.VIEWING_DETAILS && messages.map((message: Message) => (
          <ChatItem
            addToFavorites={addToFavorites}
            message={message}
          />
        ))}

        {stage === Stage.LISTING_OFFER && (
          <div>
            <OfferList propertyDetails={offerListData} />
          </div>
        )}

        {stage === Stage.WRITING_OFFER && (
          <div>
            <ChatOfferForm />
          </div>
        )}
  {/* <div
        onClick={() => setStage(stage + 1)}
        className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition duration-300 max-w-sm">
          Next
        </div> */}
      </div>
    </div>
    </>
  );
}
