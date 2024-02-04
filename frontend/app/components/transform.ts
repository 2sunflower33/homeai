import { JSONValue, Message } from "ai";
import { PropertyDetail } from "./chat-section";

export interface MessageData {
  propertyDetails: PropertyDetail[];
  majorConcernsList: MajorConcerns[][];
}

export interface MajorConcerns {
  area_section:string;
  issue: string;
  recommendation: string;
}

const mockData = '{"property_detail":[{"house_address":"1952 Camargo Dr, San Jose","property_tax":8833.0,"house_size":"1,918 sq ft","lot_size":"6,114 sq ft","bedroom_numbers":4,"bathroom_numbers":2,"upgrades":[{"year_of_upgrade":1970,"what_was_done":"Construction of the house","does_it_have_permit":true},{"year_of_upgrade":1970,"what_was_done":"Exterior stucco","does_it_have_permit":true},{"year_of_upgrade":1970,"what_was_done":"Installation of wood shake roof","does_it_have_permit":true}]},{"house_address":"2614 Coronet Blvd Belmont CA 94002-1629 San Mateo County","property_tax":9210.0,"house_size":"1920 sq ft","lot_size":"6250 sq ft","bedroom_numbers":3,"bathroom_numbers":2,"upgrades":[]}],"major_concerns":[[{"area_section":"Exterior","issue":"Water damage to roof eaves/sheathing and rafters","recommendation":"Consult a licensed general contractor or structural pest control company for repair."},{"area_section":"Electrical","issue":"Reversed polarity in one or more outlets and inoperative outlets at exterior left side and rear patio","recommendation":"Investigate and correct the wiring, recommend testing of every outlet."},{"area_section":"Plumbing","issue":"Cracked and leaking plastic drain pipe under the kitchen","recommendation":"Repair or replace the piping."},{"area_section":"Foundation","issue":"Efflorescence on portions of the foundation walls indicating moisture","recommendation":"Improve exterior drainage."},{"area_section":"Structure","issue":"Minor cracks observed in foundation walls indicating some settlement","recommendation":"Consult a licensed foundation contractor for further evaluation."}],[{"area_section":"Exterior","issue":"Water damage at rear door porch and rafters at the front; uneven, cracked sections of the patio and driveway presenting trip hazards.","recommendation":"Consult a licensed general contractor or structural pest control company for repair and safety improvements."},{"area_section":"Plumbing","issue":"Leaking sink drain in garage and leaking faucet; toilet in hall bathroom leaks.","recommendation":"Repair leaks to prevent water damage and potential mold growth."},{"area_section":"Electrical","issue":"Improper connections outside of a junction box; evidence of periodic moisture entry/rust in main and branch electrical panel.","recommendation":"Make all connections inside approved junction boxes and evaluate/improve electrical panel by a licensed electrical contractor."},{"area_section":"Interior","issue":"Water damage in downstairs bedroom; the kitchen countertop is water damaged.","recommendation":"Investigate source of water damage and repair affected areas to prevent mold growth and further structural damage."},{"area_section":"Foundation","issue":"Crawl space very damp with evidence of surface pooling of water.","recommendation":"Install drainage at the lowest level of the crawl space and consult a qualified soils & drainage expert."}]],"offer_html_str":"<pre><code># California Residential Purchase Agreement\n</code></pre>\n<h2><strong>Offer Date</strong>: [Insert Date]<br />\n<strong>Property Address</strong>: [Insert Address]<br />\n<strong>City</strong>, <strong>State</strong>, <strong>Zip</strong></h2>\n<h2>1. Offer</h2>\n<p><strong>1.1 Buyer</strong>: Jing<br />\n<strong>1.2 Purchase Price</strong>: $120,000<br />\n<strong>1.3 Terms</strong>: Cash purchase</p>\n<h2>2. Financing</h2>\n<p><strong>2.1 Cash Agreement</strong>: Buyer agrees to purchase the property with cash. Proof of funds has been provided.</p>\n<h2>3. Closing and Possession</h2>\n<p><strong>3.1 Closing Date</strong>: Closing to occur within 30 days of acceptance of this offer or as otherwise agreed upon.<br />\n<strong>3.2 Possession</strong>: Buyer to receive possession of property at closing.</p>\n<h2>4. Disclosures</h2>\n<p><strong>4.1 Seller Disclosures</strong>: Seller agrees to provide all required disclosures within 7 days of acceptance of this offer.</p>\n<h2>5. Inspections</h2>\n<p><strong>5.1 Inspection Period</strong>: Buyer has 17 days from acceptance to conduct all inspections.<br />\n<strong>5.2 Right to Cancel</strong>: Buyer reserves the right to cancel the purchase agreement based on inspection results.</p>\n<h2>6. Contingencies</h2>\n<p><strong>6.1 Inspection Contingency</strong>: This offer is contingent upon satisfactory completion of all inspections.<br />\n<strong>6.2 Title Contingency</strong>: This offer is contingent upon receiving a clear title report.</p>\n<h2>7. Closing Costs</h2>\n<p><strong>7.1 Seller Costs</strong>: Seller agrees to pay for owner’s title insurance and any required government retrofit.<br />\n<strong>7.2 Buyer Costs</strong>: Buyer agrees to pay for escrow fees, recording fees, and any other fees associated with the purchase.</p>\n<h2>8. Additional Terms</h2>\n<p><strong>8.1 AS-IS Sale</strong>: Buyer agrees to purchase the property in its current condition, subject to inspections.<br />\n<strong>8.2 Final Walk-Through</strong>: Buyer is entitled to a final walk-through of the property 5 days prior to closing.</p>\n<h2>9. Acceptance</h2>\n<h2>This offer is valid until [Insert Expiration Date and Time]. Seller’s acceptance must be communicated in writing by this deadline.<br />\n<strong>Buyer’s Signature</strong>: _______________________________ Date: ___________<br />\n<strong>Seller’s Response</strong>:<br />\n[ ] Accept [ ] Counter Offer [ ] Reject<br />\n<strong>Seller’s Signature (if accepted)</strong>: _______________________________ Date: ___________</h2>\n<p><em>Note: This is a general template for a California residential purchase offer and may need adjustments to meet specific legal requirements or personal circumstances. Consultation with a real estate professional or attorney is recommended.</em></p>\n"}';

export const isValidMessageData = (rawData: JSONValue | undefined) => {
  if (!rawData || typeof rawData !== "object") return false;
  if (Object.keys(rawData).length === 0) return false;
  return true;
};

export const insertDataIntoMessages = (
  messages: Message[],
  data: JSONValue[] | undefined,
) => {


  return messages.map((message, i) => {
    if (message.role === 'user') return message;

    // let res = JSON.parse(message.content);
    let data = JSON.parse(mockData);

    const res = {
      ...message,
      data: {
        propertyDetails: data.property_details.map((details: any) => (
          {...details, 
            offerHtmlStr: data.offer_html_str,
          }
          )),
        majorConcerns: data.major_concerns,
        
      },
    };

    console.log("transform.ts:27, message, converted", message, res);

    return res;
  });
};
