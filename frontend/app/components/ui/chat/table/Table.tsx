
import { useCallback, useRef, useState } from "react";
// import { DropzoneState, useDropzone } from "react-dropzone";
import styled from "styled-components";
import { Column } from "./Column";
import { Spacer } from "./Spacer";
import { Row } from "./Row";
import { PropertyDetail } from "@/app/components/chat-section";
// import { CSVLink } from "react-csv";


const HScroll = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const Main = styled.div`
  width: calc(100% - 32px);
  margin: 0 auto;
  max-width: 1200px;
`;

export default function Table(PropertyDetail: PropertyDetail, majorConcerns: any[]) {

    const detailsData = [
        {
          category: "House address",
          details: PropertyDetail["house_address"],
        },
        {
          category: "Property tax",
          details: PropertyDetail["property_tax"],
        },
        {
          category: "House size",
          details: PropertyDetail["house_size"],
        },
        {
          category: "Lot size",
          details: PropertyDetail["lot_size"],
        },
        {
          category: "Bedrooms",
          details: PropertyDetail["bedroom_numbers"],
        },
        {
          category: "Bathroom",
          details: PropertyDetail["bathroom_numbers"],
        },
        {
          category: "Upgrades",
          details: PropertyDetail["upgrades"].reduce((acc, curr) => {
            return (
              acc +
              `- ${curr.year_of_upgrade}: ${curr.what_was_done} [permit: ${
                curr.does_it_has_permit ? "yes" : "no"
              }]<br />`
            );
          }, ""),
        },
      ];
    const detailsDataHeaders = ["Category", "Details"];
    const dropzoneRef = useRef<HTMLDivElement>(null);
    const resultRef = useRef<HTMLDivElement>(null);

    const majorConcernsHeaders = [
        "Number",
        "Area/Section",
        "Issue",
        "Recommendation",
        "Estimated Cost",
        "Report Type",
    ];

    return (
        <Main>
        <Column>
          <div ref={dropzoneRef} />
          <Spacer size={3} />
          {/* <Dropzone {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
            <input {...getInputProps()} />
            <DropzoneContent state={state} selectedFiles={selectedFiles} />
          </Dropzone> */}
          <Spacer size={3} />
  
  
          <Spacer size={10} />
  
          {/* {state === "UPLOADED" && ( */}
            <Column ref={resultRef}>
              <Row>
                <h2 style={{ width: "100%" }}>Property Details</h2>
                {/* <CSVLink data={detailsCsvData} filename="property-details.csv">
                  <Button size="small">Download CSV</Button>
                </CSVLink> */}
              </Row>
              <HScroll>
                <Spacer size={1} />
                <StyledTable>
                  <thead>
                    <tr>
                      {detailsDataHeaders.map((header) => (
                        <th key={header}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {detailsData.map((entry) => (
                      <tr key={entry.category}>
                        <td>{entry.category}</td>
                        <td
                          dangerouslySetInnerHTML={{
                            __html: entry.details.toString(),
                          }}
                        />
                      </tr>
                    ))}
                  </tbody>
                </StyledTable>
              </HScroll>
              <Spacer size={5} />
  
              <Row>
                <h2 style={{ width: "100%" }}>Major Concerns</h2>
                {/* <CSVLink data={concernsCsvData} filename="major-concerns.csv">
                  <Button size="small">Download CSV</Button>
                </CSVLink> */}
              </Row>
              <HScroll>
                <Spacer size={1} />
                <StyledTable>
                  <thead>
                    <tr>
                      {majorConcernsHeaders.map((header) => (
                        <th key={header}>{header}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {majorConcerns.map((entry, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{entry.area_section}</td>
                        <td>{entry.issue}</td>
                        <td>{entry.recommendation}</td>
                        <td>{entry.estimated_cost}</td>
                        <td>{entry.report_type_and_page}</td>
                      </tr>
                    ))}
                  </tbody>
                </StyledTable>
              </HScroll>
              <Spacer size={3} />
              {/* <Row>
                <Button onClick={scrollToDropzone}>Upload again</Button>
              </Row> */}
            </Column>
          {/* )} */}
  
          <Spacer size={8} />
        </Column>
      </Main>
    );
}


const Button = styled.button<{ disabled?: boolean; size?: "small" | "big" }>`
  white-space: nowrap;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  transition: background-position 0.5s;
  background-size: 200% auto;
  color: white;
  font-weight: 600;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-image: linear-gradient(
    to right,
    #fbc2eb 0%,
    #a6c1ee 51%,
    #fbc2eb 100%
  );

  &:hover {
    background-position: right center;
  }

  ${(props) => {
        switch (props.size) {
            case "small":
                return `
          font-size: 0.8rem;
          padding: 12px 16px;;
        `;
            case "big":
                return `
          font-size: 1.2rem;
          padding: 16px 32px;
        `;
            default:
                return `
          font-size: 1.2rem;
          padding: 16px 32px;
        `;
        }
    }}

  ${(props) =>
        props.disabled
            ? `
    background-image: none;
    background-color: #ffffff;
    color: #aaaaaa;
    cursor: not-allowed;
  `
            : ""}
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;

  td,
  th {
    border: 1px solid #cccccc;
    padding: 8px;

    // TODO: allow dynamic width based on content
    @media (max-width: 768px) {
      min-width: 200px;
      &:first-child {
        min-width: unset;
      }
    }
  }

  tr:nth-child(odd) {
    background-color: #f9f9f9;
  }

  tr:nth-child(even) {
    background-color: #ffffff;
  }

  tr:hover {
    background-color: #cccccc;
    background-color: #f2f2f2;
  }

  th {
    background-color: #dddddd;
    font-weight: 600;
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
  }
`;
