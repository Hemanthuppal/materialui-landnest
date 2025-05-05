import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  IconButton,
  Box,
  Fade,
  Grow,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import {
  Add as AddIcon,
  Remove as RemoveIcon,
  Edit as EditIcon,
  Save as SaveIcon,
} from "@mui/icons-material";
import AdminDashboard from "../../Admin/Dashboard/Dashboard";

const ConstructionPackages = () => {
  const [expanded, setExpanded] = useState({});
  const [editableContent, setEditableContent] = useState({});
  const [editingField, setEditingField] = useState(null);
  const [tempContent, setTempContent] = useState({});
  const [packageData, setPackageData] = useState({});
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // Fetch data from API
  useEffect(() => {
    const fetchPackageData = async () => {
      try {
        const response = await axios.get("https://landnest.net:81/packages/2/");
        setPackageData(response.data);
        updateSectionContent(response.data);
      } catch (error) {
        console.error("Error fetching package data:", error);
        setSnackbar({
          open: true,
          message: "Failed to fetch package data",
          severity: "error",
        });
      }
    };
    fetchPackageData();
  }, []);

  const updateSectionContent = (data) => {
    const updatedSectionContent = {
      package2500: {
        design: sectionContent.package2500.design,
        materials: sectionContent.package2500.materials,
        flooring: sectionContent.package2500.flooring
          .replace(/₹60\/sq\. ft\./, `₹${data.tile_general || 0}/sq. ft.`)
          .replace(/₹80\/sq\. ft\./, `₹${data.tile_stair || 0}/sq. ft.`)
          .replace(/₹60\/sq\. ft\./g, `₹${data.tile_balcony || 0}/sq. ft.`)
          .replace(/₹60\/sq\. ft\./g, `₹${data.title_bathroom || 0}/sq. ft.`)
          .replace(/₹50\/sq\. ft\./, `₹${data.tile_parking || 0}/sq. ft.`)
          .replace(
            /₹100\/sq\. ft\./g,
            `₹${data.tile_kitchen_countertop || 0}/sq. ft.`
          )
          .replace(
            /₹50\/sq\. ft\./,
            `₹${data.tile_kitchen_backsplash || 0}/sq. ft.`
          ),
        windows: sectionContent.package2500.windows.replace(
          /₹550\/sq\. ft\./,
          `₹${data.window_standered || 0}/sq. ft.`
        ),
        doors: sectionContent.package2500.doors
          .replace(/₹22,000/, `₹${data.doors_main || 0}`)
          .replace(/₹20,000/, `₹${data.doors_pooja || 0}`)
          .replace(/₹8,000/, `₹${data.doors_internal || 0}`),
        fabrication: sectionContent.package2500.fabrication
          .replace(
            /₹300 per sq\. ft\./,
            `₹${data.fabrication_stair_rail || 0} per sq. ft.`
          )
          .replace(
            /₹350 per sq\. ft\./,
            `₹${data.fabrication_gate || 0} per sq. ft.`
          ),
        plumbing: sectionContent.package2500.plumbing
          .replace(/₹1,000/, `₹${data.sanitary_overheadtank || 0}`)
          .replace(/₹6,500/, `₹${data.sanitary_commode || 0}`)
          .replace(/₹3,500/, `₹${data.sanitary_wallmixer || 0}`),
        extra: sectionContent.package2500.extra,
        sanctions: sectionContent.package2500.sanctions,
        elevation: sectionContent.package2500.elevation,
        audit: sectionContent.package2500.audit,
      },
      // package2300: {
      //   design: sectionContent.package2300.design,
      //   materials: sectionContent.package2300.materials,
      //   foundation: sectionContent.package2300.foundation,
      //   flooring: sectionContent.package2300.flooring
      //     .replace(/₹150\/- per sq\. ft\./g, `₹${data.tile_general_2300 || 0}/sq. ft.`)
      //     .replace(/₹120\/- per sq\. ft\./, `₹${data.tile_stair_2300 || 0}/sq. ft.`)
      //     .replace(/₹150\/- per sq\. ft\./g, `₹${data.tile_balcony_2300 || 0}/sq. ft.`)
      //     .replace(/₹150\/- per sq\. ft\./g, `₹${data.title_bathroom_2300 || 0}/sq. ft.`)
      //     .replace(/₹150\/- per sq\. ft\./, `₹${data.tile_parking_2300 || 0}/sq. ft.`)
      //     .replace(/₹450\/- per sq\. ft\./, `₹${data.tile_kitchen_countertop_2300 || 0}/sq. ft.`)
      //     .replace(/₹150\/- per sq\. ft\./, `₹${data.tile_kitchen_backsplash_2300 || 0}/sq. ft.`),
      //   windows: sectionContent.package2300.windows.replace(
      //     /₹850\/- per sq\. ft\./,
      //     `₹${data.window_standered_2300 || 0}/sq. ft.`
      //   ),
      //   doors: sectionContent.package2300.doors
      //     .replace(/₹40,000/, `₹${data.doors_main_2300 || 0}`)
      //     .replace(/₹35,000/, `₹${data.doors_pooja_2300 || 0}`)
      //     .replace(/₹12,000/, `₹${data.doors_internal_2300 || 0}`),
      //   painting: sectionContent.package2300.painting,
      //   fabrication: sectionContent.package2300.fabrication
      //     .replace(/₹1000 per sq\. ft\./, `₹${data.fabrication_stair_rail_2300 || 0}/sq. ft.`)
      //     .replace(/₹550 per sq\. ft\./, `₹${data.fabrication_gate_2300 || 0}/sq. ft.`),
      //   plumbing: sectionContent.package2300.plumbing
      //     .replace(/₹4000/, `₹${data.sanitary_overheadtank_2300 || 0}`)
      //     .replace(/₹12,000/, `₹${data.sanitary_commode_2300 || 0}`)
      //     .replace(/₹8000/, `₹${data.sanitary_wallmixer_2300 || 0}`),
      //   extra: sectionContent.package2300.extra,
      //   sanctions: sectionContent.package2300.sanctions,
      //   additional: sectionContent.package2300.additional,
      // },
      // package2200: {
      //   design: sectionContent.package2200.design,
      //   materials: sectionContent.package2200.materials,
      //   flooring: sectionContent.package2200.flooring
      //     .replace(/₹60\/sq\. ft\./, `₹${data.tile_general_2200 || 0}/sq. ft.`)
      //     .replace(/₹80\/sq\. ft\./, `₹${data.tile_stair_2200 || 0}/sq. ft.`)
      //     .replace(/₹60\/sq\. ft\./g, `₹${data.tile_balcony_2200 || 0}/sq. ft.`)
      //     .replace(/₹60\/sq\. ft\./g, `₹${data.title_bathroom_2200 || 0}/sq. ft.`)
      //     .replace(/₹50\/sq\. ft\./, `₹${data.tile_parking_2200 || 0}/sq. ft.`)
      //     .replace(
      //       /₹100\/sq\. ft\./g,
      //       `₹${data.tile_kitchen_countertop_2200 || 0}/sq. ft.`
      //     )
      //     .replace(
      //       /₹50\/sq\. ft\./,
      //       `₹${data.tile_kitchen_backsplash_2200 || 0}/sq. ft.`
      //     ),
      //   windows: sectionContent.package2200.windows.replace(
      //     /₹550\/sq\. ft\./,
      //     `₹${data.window_standered_2200 || 0}/sq. ft.`
      //   ),
      //   doors: sectionContent.package2200.doors
      //     .replace(/₹22,000/, `₹${data.doors_main_2200 || 0}`)
      //     .replace(/₹20,000/, `₹${data.doors_pooja_2200 || 0}`)
      //     .replace(/₹8,000/, `₹${data.doors_internal_2200 || 0}`),
      //   painting: sectionContent.package2200.painting,
      //   fabrication: sectionContent.package2200.fabrication
      //     .replace(
      //       /₹300 per sq\. ft\./,
      //       `₹${data.fabrication_stair_rail_2200 || 0}/sq. ft.`
      //     )
      //     .replace(
      //       /₹350 per sq\. ft\./,
      //       `₹${data.fabrication_gate_2200 || 0}/sq. ft.`
      //     ),
      //   plumbing: sectionContent.package2200.plumbing
      //     .replace(/₹1,000/, `₹${data.sanitary_overheadtank_2200 || 0}`)
      //     .replace(/₹6,500/, `₹${data.sanitary_commode_2200 || 0}`)
      //     .replace(/₹3,500/, `₹${data.sanitary_wallmixer_2200 || 0}`),
      //   extra: sectionContent.package2200.extra,
      //   sanctions: sectionContent.package2200.sanctions,
      //   elevation: sectionContent.package2200.elevation,
      //   audit: sectionContent.package2200.audit,
      // },
    };
    setSectionContent(updatedSectionContent);
  };

  const handleChange = (panel, packageType) => (event, newExpanded) => {
    setExpanded((prev) => ({
      ...prev,
      [packageType]: newExpanded ? panel : null,
    }));
  };

  const extractRupeeValues = (content) => {
    const rupeeRegex = /₹(\d{1,3}(?:,\d{3})*(?:\.\d{2})?|\d+|null)/g;
    const matches = [...content.matchAll(rupeeRegex)];
    return matches.map((match) => ({
      value: match[0],
      index: match.index,
      length: match[0].length,
    }));
  };

  const handleEdit = (pkgId, sectionId, content) => {
    setTempContent((prev) => ({
      ...prev,
      [`${pkgId}-${sectionId}`]: content,
    }));
    setEditingField(`${pkgId}-${sectionId}`);
  };

  const handleSave = async (pkgId, sectionId) => {
    try {
      const content = tempContent[`${pkgId}-${sectionId}`];
      const rupeeValues = extractRupeeValues(content);

      if (rupeeValues.length === 0) {
        setEditableContent((prev) => ({
          ...prev,
          [`${pkgId}-${sectionId}`]: content,
        }));
        setEditingField(null);
        return;
      }

      let updatePayload = {};
      switch (sectionId) {
        case "pkg2500Three": // Flooring section for 2500
          const flooringValues = content.match(/₹([\d,null]+)/g) || [];
          updatePayload = {
            tile_general: extractNumber(flooringValues[0]),
            tile_stair: extractNumber(flooringValues[1]),
            tile_balcony: extractNumber(flooringValues[2]),
            title_bathroom: extractNumber(flooringValues[3]),
            tile_parking: extractNumber(flooringValues[4]),
            tile_kitchen_countertop: extractNumber(flooringValues[5]),
            tile_kitchen_backsplash: extractNumber(flooringValues[6]),
          };
          break;
        case "pkg2500Four": // Windows section for 2500
          updatePayload = {
            window_standered: extractNumber(content.match(/₹([\d,null]+)/)?.[0]),
          };
          break;
        case "pkg2500Five": // Doors section for 2500
          const doorValues = content.match(/₹([\d,null]+)/g) || [];
          updatePayload = {
            doors_main: extractNumber(doorValues[0]),
            doors_pooja: extractNumber(doorValues[1]),
            doors_internal: extractNumber(doorValues[2]),
          };
          break;
        case "pkg2500Seven": // Fabrication section for 2500
          const fabricationValues = content.match(/₹([\d,null]+)/g) || [];
          updatePayload = {
            fabrication_stair_rail: extractNumber(fabricationValues[0]),
            fabrication_gate: extractNumber(fabricationValues[1]),
          };
          break;
        case "pkg2500Eight": // Plumbing section for 2500
          const plumbingValues = content.match(/₹([\d,null]+)/g) || [];
          updatePayload = {
            sanitary_overheadtank: extractNumber(plumbingValues[0]) || 0,
            sanitary_commode: extractNumber(plumbingValues[1]) || 0,
            sanitary_wallmixer: extractNumber(plumbingValues[2]) || 0,
          };
          break;
        // case "pkg2300Three": // Flooring section for 2300
        //   const flooringValues2300 = content.match(/₹([\d,null]+)/g) || [];
        //   updatePayload = {
        //     tile_general_2300: extractNumber(flooringValues2300[0]),
        //     tile_stair_2300: extractNumber(flooringValues2300[1]),
        //     tile_balcony_2300: extractNumber(flooringValues2300[2]),
        //     title_bathroom_2300: extractNumber(flooringValues2300[3]),
        //     tile_parking_2300: extractNumber(flooringValues2300[4]),
        //     tile_kitchen_countertop_2300: extractNumber(flooringValues2300[5]),
        //     tile_kitchen_backsplash_2300: extractNumber(flooringValues2300[6]),
        //   };
        //   break;
        // case "pkg2300Four": // Windows section for 2300
        //   updatePayload = {
        //     window_standered_2300: extractNumber(content.match(/₹([\d,null]+)/)?.[0]),
        //   };
        //   break;
        // case "pkg2300Five": // Doors section for 2300
        //   const doorValues2300 = content.match(/₹([\d,null]+)/g) || [];
        //   updatePayload = {
        //     doors_main_2300: extractNumber(doorValues2300[0]),
        //     doors_pooja_2300: extractNumber(doorValues2300[1]),
        //     doors_internal_2300: extractNumber(doorValues2300[2]),
        //   };
        //   break;
        // case "pkg2300Seven": // Fabrication section for 2300
        //   const fabricationValues2300 = content.match(/₹([\d,null]+)/g) || [];
        //   updatePayload = {
        //     fabrication_stair_rail_2300: extractNumber(fabricationValues2300[0]),
        //     fabrication_gate_2300: extractNumber(fabricationValues2300[1]),
        //   };
        //   break;
        // case "pkg2300Eight": // Plumbing section for 2300
        //   const plumbingValues2300 = content.match(/₹([\d,null]+)/g) || [];
        //   updatePayload = {
        //     sanitary_overheadtank_2300: extractNumber(plumbingValues2300[0]) || 0,
        //     sanitary_commode_2300: extractNumber(plumbingValues2300[1]) || 0,
        //     sanitary_wallmixer_2300: extractNumber(plumbingValues2300[2]) || 0,
        //   };
        //   break;
        // case "pkg2200Three": // Flooring section for 2200
        //   const flooringValues2200 = content.match(/₹([\d,null]+)/g) || [];
        //   updatePayload = {
        //     tile_general_2200: extractNumber(flooringValues2200[0]),
        //     tile_stair_2200: extractNumber(flooringValues2200[1]),
        //     tile_balcony_2200: extractNumber(flooringValues2200[2]),
        //     title_bathroom_2200: extractNumber(flooringValues2200[3]),
        //     tile_parking_2200: extractNumber(flooringValues2200[4]),
        //     tile_kitchen_countertop_2200: extractNumber(flooringValues2200[5]),
        //     tile_kitchen_backsplash_2200: extractNumber(flooringValues2200[6]),
        //   };
        //   break;
        // case "pkg2200Four": // Windows section for 2200
        //   updatePayload = {
        //     window_standered_2200: extractNumber(content.match(/₹([\d,null]+)/)?.[0]),
        //   };
        //   break;
        // case "pkg2200Five": // Doors section for 2200
        //   const doorValues2200 = content.match(/₹([\d,null]+)/g) || [];
        //   updatePayload = {
        //     doors_main_2200: extractNumber(doorValues2200[0]),
        //     doors_pooja_2200: extractNumber(doorValues2200[1]),
        //     doors_internal_2200: extractNumber(doorValues2200[2]),
        //   };
        //   break;
        // case "pkg2200Seven": // Fabrication section for 2200
        //   const fabricationValues2200 = content.match(/₹([\d,null]+)/g) || [];
        //   updatePayload = {
        //     fabrication_stair_rail_2200: extractNumber(fabricationValues2200[0]),
        //     fabrication_gate_2200: extractNumber(fabricationValues2200[1]),
        //   };
        //   break;
        // case "pkg2200Eight": // Plumbing section for 2200
        //   const plumbingValues2200 = content.match(/₹([\d,null]+)/g) || [];
        //   updatePayload = {
        //     sanitary_overheadtank_2200: extractNumber(plumbingValues2200[0]) || 0,
        //     sanitary_commode_2200: extractNumber(plumbingValues2200[1]) || 0,
        //     sanitary_wallmixer_2200: extractNumber(plumbingValues2200[2]) || 0,
        //   };
        //   break;
        // default:
        //   break;
      }

      // Filter out undefined values
      const filteredPayload = Object.fromEntries(
        Object.entries(updatePayload).filter(([_, v]) => v !== undefined)
      );

      if (Object.keys(filteredPayload).length > 0) {
        const response = await axios.put(
          `https://landnest.net:81/packages/2/`,
          filteredPayload
        );

        setPackageData(response.data);
        updateSectionContent(response.data);

        setSnackbar({
          open: true,
          message: "Package updated successfully",
          severity: "success",
        });
      }

      setEditableContent((prev) => ({
        ...prev,
        [`${pkgId}-${sectionId}`]: content,
      }));
      setEditingField(null);
    } catch (error) {
      console.error("Error updating package:", error);
      setSnackbar({
        open: true,
        message: "Failed to update package",
        severity: "error",
      });
    }
  };

  const extractNumber = (value) => {
    if (!value) return 0;
    const num = value.replace(/[^0-9]/g, "");
    return num ? parseInt(num, 10) : 0;
  };

  const handleRupeeValueChange = (
    pkgId,
    sectionId,
    content,
    index,
    length,
    newValue
  ) => {
    // Ensure the value starts with ₹ and has a number or 0
    if (!newValue.startsWith('₹')) {
      newValue = '₹' + (newValue.replace(/[^0-9]/g, '') || '0');
    } else {
      newValue = '₹' + (newValue.substring(1).replace(/[^0-9]/g, '') || '0');
    }
    
    const newContent =
      content.substring(0, index) +
      newValue +
      content.substring(index + length);
    setTempContent((prev) => ({
      ...prev,
      [`${pkgId}-${sectionId}`]: newContent,
    }));
  };

  const renderContentWithEditableRupeeValues = (pkgId, sectionId, content) => {
    if (editingField !== `${pkgId}-${sectionId}`) {
      return <span dangerouslySetInnerHTML={{ __html: content }} />;
    }

    const rupeeValues = extractRupeeValues(content);
    if (rupeeValues.length === 0) {
      return <span dangerouslySetInnerHTML={{ __html: content }} />;
    }

    let lastPos = 0;
    const elements = [];

    rupeeValues.forEach((rupee, i) => {
      if (rupee.index > lastPos) {
        elements.push(
          <span
            key={`text-${i}`}
            dangerouslySetInnerHTML={{
              __html: content.substring(lastPos, rupee.index),
            }}
          />
        );
      }

      elements.push(
        <TextField
          key={`edit-${i}`}
          value={rupee.value}
          onChange={(e) =>
            handleRupeeValueChange(
              pkgId,
              sectionId,
              tempContent[`${pkgId}-${sectionId}`],
              rupee.index,
              rupee.length,
              e.target.value
            )
          }
          size="small"
          sx={{
            display: "inline-block",
            width: `${Math.max(rupee.length * 8, 80)}px`,
            mx: 0.5,
            "& .MuiInputBase-root": {
              height: "32px",
            },
          }}
        />
      );

      lastPos = rupee.index + rupee.length;
    });

    if (lastPos < content.length) {
      elements.push(
        <span
          key="text-end"
          dangerouslySetInnerHTML={{
            __html: content.substring(lastPos),
          }}
        />
      );
    }

    return elements;
  };

  const [sectionContent, setSectionContent] = useState({
    package2500: {
      design:
        "• <strong>2D Floor Plans</strong> \n• <strong>3D Elevations</strong>",
      materials:
        "• <strong>Steel:</strong> Fe500/550 Grade TMT (A-One Gold, Prime Gold, or Equivalent)\n• <strong>Cement:</strong> 53 & 43 Grade (Bharathi, Dalmia, Maha, or Equivalent)\n• <strong>Aggregates:</strong> 20mm & 40mm\n• <strong>Sand:</strong> M-Sand for blockwork, P-Sand for plastering\n• <strong>Blocks:</strong> Solid Blocks (6″ {36 per pic} & 4″ {28 per pic})\n• <strong>Concrete Mix:</strong> RMC or hand mix – M20 Grade\n• <strong>Underground Sump:</strong> 6″ solid block with waterproof plastering\n• <strong>Plinth Foundation:</strong> One course of size stone masonry\n• <strong>Ceiling Height:</strong> 10 feet (floor to floor)\n• <strong>Waterproofing:</strong> Dr. Fixit or Fosroc",
      flooring:
        "• <strong>Living, Kitchen, Dining & Bedroom:</strong> Tiles up to ₹60/sq. ft.\n• <strong>Staircase:</strong> Granite up to ₹80/sq. ft.\n• <strong>Balconies & Sitouts:</strong> Anti-skid tiles up to ₹60/sq. ft.\n• <strong>Bathrooms/Toilets:</strong> Wall & floor tiles up to ₹60/sq. ft.\n• <strong>Parking Area:</strong> Flooring up to ₹50/sq. ft.\n• <strong>Kitchen Countertop:</strong> Granite up to ₹100/sq. ft.\n• <strong>Kitchen Backsplash (Dadoing, 4ft height):</strong> Tiles up to ₹50/sq. ft.\n• <strong>Bathroom Wall Tiling:</strong> Up to 7 feet height\n• <strong>Terrace Finishing:</strong> Screed concrete",
      windows:
        "• <strong>Standard Windows:</strong> 2-track UPVC with 5mm glass & MS grill (₹550/sq. ft.)\n• <strong>Maximum Window Openings:</strong> 2.5-track Aluminum with 4mm glass & MS grill\n• <strong>Maximum Window Coverage:</strong> 10% of total wall space",
      doors:
        "• <strong>Main Door:</strong> Teakwood frame (5″x3″) with teak shutter & fittings (₹22,000 per door)\n• <strong>Pooja Room Door:</strong> Frame (5″x3″) with readymade shutter & fittings (₹20,000 per door)\n• <strong>Internal Doors:</strong> WPC or neem wood frame (4″x3″) with membrane shutter & fittings (₹8,000 per door)\n• <strong>Bathroom Doors:</strong> PVC/WPC doors",
      painting:
        "• <strong>Interior Walls & Ceilings:</strong> 2 coats putty + 1 coat primer + 2 coats of Asian Tractor Emulsion\n• <strong>Exterior Walls:</strong> 1 coat primer + 2 coats of ACE Emulsion\n• <strong>Windows & MS Grills:</strong> 2 coats of enamel paint\n• <strong>Paint Brands:</strong> Asian, Berger, Dulux (as per owner preference)",
      fabrication:
        "• <strong>MS Staircase Railing:</strong> ₹300 per sq. ft. (3′ height)\n• <strong>MS Standard Gate:</strong> ₹350 per sq. ft. (5′ height)",
      plumbing:
        "• <strong>Pipes:</strong> CPVC (Ashirwad, Supreme, Astral)\n• <strong>Overhead Tank:</strong> PVC (Ganga or Kaveri) with MS support (6ft height)\n• <strong>Solar & Geyser Provision:</strong> Diverter and mixer-ready\n• <strong>Sanitary Installations:</strong>\n o <strong>Overhead tank:</strong> ₹1,000\n o <strong>Commode:</strong> ₹6,500\n o <strong>Wall mixer:</strong> ₹3,500",
      extra:
        "• <strong>Compound Wall Construction</strong>\n• <strong>BBMP/BDA Approvals & Liaison Fees</strong>\n• <strong>Building Plinth Level Above 18″ from Road</strong>\n• <strong>External Ramps & Landscaping, road cutting works</strong>\n• <strong>Extra Depth for Sump Tank, Rain water sump</strong>\n• <strong>Interior Works (Wardrobes, False Ceiling, etc.)</strong>\n• <strong>External Elevation Cladding</strong>\n• <strong>Security Fabrication Works</strong>\n• <strong>Any Civil Works Outside the Main House</strong>\n• <strong>Additional Height for Compound Wall</strong>\n• <strong>Electrical Fixtures (Lights, Fans, Bulbs, etc.)</strong>\n• <strong>Additional Charges for Soil Bearing Capacity < 180 SBC</strong>",
      sanctions:
        "Assistance with approvals from government agencies, including:\n• <strong>Construction Plan Sanction</strong>\n• <strong>Temporary Electricity Connection</strong>\n• <strong>Permanent Electrical Connection</strong>\n• <strong>Water Connection</strong>\n• <strong>Sewage Connection</strong>",
      elevation:
        "<strong>Elevation Budget:</strong> 0.25% of the Project's Super Built-Up Cost",
      audit:
        "• <strong>Soil Testing:</strong> Additional charges\n• <strong>Site Supervision:</strong> Civil Engineer & Project Manager assigned\n• <strong>Architect Visits:</strong> Additional charges",
    },
    // package2300: {
    //   design:
    //     "• <strong>2D Floor Plans</strong> \n• <strong>3D Elevation</strong> \n• <strong>Structural Drawing</strong> \n• <strong>Plumbing & Electrical Layout</strong> \n• <strong>Working Drawings for Execution & Schedule of Openings</strong> ",
    //   materials:
    //     "• <strong>Steel:</strong> Fe500/550 Grade TMT – Indus, Prime Gold, JSW, or Tata Equivalent\n• <strong>Cement:</strong> 53 & 43 Grades (Birla, ACC, Ultratech, or Equivalent)\n• <strong>Aggregates:</strong> 20MM & 40MM\n• <strong>Sand:</strong> M-Sand for Blockwork & P-Sand for Plastering\n• <strong>Blocks:</strong> Solid Blocks : 6″ {55 per pic} & 4″ {45 per pic}\n• <strong>Concrete Mix:</strong> RMC – M20 Grade",
    //   foundation:
    //     "• <strong>Underground Sump</strong> 6″ Solid Block, Waterproof Plastered\n• <strong>Plinth Foundation</strong> Two-Course Size Stone Masonry Under Plinth\n• <strong>Ceiling Height:</strong> 10 Feet (Floor to Floor)\n• <strong>Waterproofing:</strong> Dr. Fixit or Fosroc",
    //   flooring:
    //     "• <strong>Living, Kitchen, Dining & Bedroom:</strong> ₹150/- per sq. ft.\n• <strong>Staircase:</strong> Granite up to ₹120/- per sq. ft.\n• <strong>Balconies & Sitouts:</strong> Anti-skid tiles up to ₹150/- per sq. ft.\n• <strong>Bathroom/Toilet Wall & Flooring:</strong> ₹150/- per sq. ft.\n• <strong>Parking Floor:</strong> ₹150/- per sq. ft.\n• <strong>Kitchen Countertop:</strong> ₹450/- per sq. ft.\n• <strong>Kitchen Dadoing (2 feet tiles):</strong> ₹150/- per sq. ft.\n• <strong>Bathroom Dadoing (10 feet height):</strong> Included\n• <strong>Terrace:</strong> Screed Concreting",
    //   windows:
    //     "• <strong>Windows:</strong> 3-Track UPVC with 5mm Glass & MS Grill (Budget ₹850/- per sq. ft.)\n• <strong>Maximum Opening Percentage:</strong> 15%",
    //   doors:
    //     "• <strong>Main Door:</strong> Teak Wood Frame (6″X6″) + Teak Door Shutter (₹40,000 per door)\n• <strong>Pooja Door:</strong> 5″X3″ Readymade Door (₹35,000 per door)\n• <strong>Internal Doors:</strong> WPC/Sal Frame (4″X3″) + Membrane Door Shutter (₹12,000 per door)\n• <strong>Bathroom Doors:</strong> WPC",
    //   painting:
    //     "• <strong>Interior Walls & Ceiling:</strong> 2 Coats Putty + 1 Coat Primer + 2 Coats of Asian Royale\n• <strong>Exterior Walls:</strong> 1 Coat Primer + 2 Coats of Apex ultima\n• <strong>Windows MS Grills:</strong> 2 Coats of Enamel Paint\n• <strong>Brands Considered:</strong> Asian, Berger, Dulux (Owner's Choice)",
    //   fabrication:
    //     "• <strong>MS Staircase Railing:</strong> ₹1000 per sq. ft. (3'6” height)\n• <strong>MS Standard Gate:</strong> ₹550 per sq. ft. (6' height)",
    //   plumbing:
    //     "• <strong>Pipes:</strong> Ashirwad / Supreme / Astral CPVC\n• <strong>Water Tank:</strong> PVC Overhead Tank (Ganga/Kaveri) with MS Structure (6' height)\n• <strong>Solar & Geyser Provision:</strong> Provided for Diverters/Mixtures Only\n• <strong>Sewage Chambers:</strong> PVC Cover Inside Plot Area (Overhead Tank: ₹4000, Commode: ₹12,000, Wall Mixer: ₹8000)",
    //   extra:
    //     "• <strong>Liaison Work:</strong> BBMP/BDA or other approving bodies\n• <strong>Extra Civil Work:</strong>\n  o Floor Level more than 18″ above Road Level\n  o Outside Ramping & Extra Sump Depth, Rain water sump\n  o Interior Works (Wardrobe, False Ceiling, etc.)\n  o External Cladding for Elevation\n  o Landscaping & Security Fabrication Work\n  o Any Civil Work outside House Area Road cutting\n  o Additional Height for Compound\n• <strong>Electrical Fittings:</strong> Light Tubes, Bulbs, Fans, etc., not included\n• <strong>Soil Bearing Capacity (SBC):</strong> Extra charges if SBC < 180",
    //   sanctions:
    //     "Assistance for:\n• <strong>Construction Plan Sanction:</strong> Included\n• <strong>Temporary Electricity Connection:</strong> Included\n• <strong>Permanent Electrical Connection:</strong> Included\n• <strong>Water Connection:</strong> Included\n• <strong>Sewage Connection:</strong> Included",
    //   additional:
    //     "• <strong>Elevation Budget:</strong> 1.25% of Project Super built Cost\n• <strong>Soil Testing:</strong> Extra charges\n• <strong>Site Supervision:</strong> Civil Engineer & PM assigned\n• <strong>Architect Visits:</strong> Extra charges",
    // },
    // package2200: {
    //   design:
    //     "• <strong>2D Floor Plans</strong> \n• <strong>3D Elevations</strong>",
    //   materials:
    //     "• <strong>Steel:</strong> Fe500/550 Grade TMT (A-One Gold, Prime Gold, or Equivalent)\n• <strong>Cement:</strong> 53 & 43 Grade (Bharathi, Dalmia, Maha, or Equivalent)\n• <strong>Aggregates:</strong> 20mm & 40mm\n• <strong>Sand:</strong> M-Sand for blockwork, P-Sand for plastering\n• <strong>Blocks:</strong> Solid Blocks (6″ {36 per pic} & 4″ {28 per pic})\n• <strong>Concrete Mix:</strong> RMC or hand mix – M20 Grade\n• <strong>Underground Sump:</strong> 6″ solid block with waterproof plastering\n• <strong>Plinth Foundation:</strong> One course of size stone masonry\n• <strong>Ceiling Height:</strong> 10 feet (floor to floor)\n• <strong>Waterproofing:</strong> Dr. Fixit or Fosroc",
    //   flooring:
    //     "• <strong>Living, Kitchen, Dining & Bedroom:</strong> Tiles up to ₹60/sq. ft.\n• <strong>Staircase:</strong> Granite up to ₹80/sq. ft.\n• <strong>Balconies & Sitouts:</strong> Anti-skid tiles up to ₹60/sq. ft.\n• <strong>Bathrooms/Toilets:</strong> Wall & floor tiles up to ₹60/sq. ft.\n• <strong>Parking Area:</strong> Flooring up to ₹50/sq. ft.\n• <strong>Kitchen Countertop:</strong> Granite up to ₹100/sq. ft.\n• <strong>Kitchen Backsplash (Dadoing, 4ft height):</strong> Tiles up to ₹50/sq. ft.\n• <strong>Bathroom Wall Tiling:</strong> Up to 7 feet height\n• <strong>Terrace Finishing:</strong> Screed concrete",
    //   windows:
    //     "• <strong>Standard Windows:</strong> 2-track UPVC with 5mm glass & MS grill (₹550/sq. ft.)\n• <strong>Maximum Window Openings:</strong> 2.5-track Aluminum with 4mm glass & MS grill\n• <strong>Maximum Window Coverage:</strong> 10% of total wall space",
    //   doors:
    //     "• <strong>Main Door:</strong> Teakwood frame (5″x3″) with teak shutter & fittings (₹22,000 per door)\n• <strong>Pooja Room Door:</strong> Frame (5″x3″) with readymade shutter & fittings (₹20,000 per door)\n• <strong>Internal Doors:</strong> WPC or neem wood frame (4″x3″) with membrane shutter & fittings (₹8,000 per door)\n• <strong>Bathroom Doors:</strong> PVC/WPC doors",
    //   painting:
    //     "• <strong>Interior Walls & Ceilings:</strong> 2 coats putty + 1 coat primer + 2 coats of Asian Tractor Emulsion\n• <strong>Exterior Walls:</strong> 1 coat primer + 2 coats of ACE Emulsion\n• <strong>Windows & MS Grills:</strong> 2 coats of enamel paint\n• <strong>Paint Brands:</strong> Asian, Berger, Dulux (as per owner preference)",
    //   fabrication:
    //     "• <strong>MS Staircase Railing:</strong> ₹300 per sq. ft. (3′ height)\n• <strong>MS Standard Gate:</strong> ₹350 per sq. ft. (5′ height)",
    //   plumbing:
    //     "• <strong>Pipes:</strong> CPVC (Ashirwad, Supreme, Astral)\n• <strong>Overhead Tank:</strong> PVC (Ganga or Kaveri) with MS support (6ft height)\n• <strong>Solar & Geyser Provision:</strong> Diverter and mixer-ready\n• <strong>Sanitary Installations:</strong>\n  o <strong>Overhead tank:</strong> ₹1,000\n  o <strong>Commode:</strong> ₹6,500\n  o <strong>Wall mixer:</strong> ₹3,500",
    //   extra:
    //     "• <strong>Compound Wall Construction</strong>\n• <strong>BBMP/BDA Approvals & Liaison Fees</strong>\n• <strong>Building Plinth Level Above 18″ from Road</strong>\n• <strong>External Ramps & Landscaping, road cutting works</strong>\n• <strong>Extra Depth for Sump Tank, Rain water sump</strong>\n• <strong>Interior Works (Wardrobes, False Ceiling, etc.)</strong>\n• <strong>External Elevation Cladding</strong>\n• <strong>Security Fabrication Works</strong>\n• <strong>Any Civil Works Outside the Main House</strong>\n• <strong>Additional Height for Compound Wall</strong>\n• <strong>Electrical Fixtures (Lights, Fans, Bulbs, etc.)</strong>\n• <strong>Additional Charges for Soil Bearing Capacity < 180 SBC</strong>",
    //   sanctions:
    //     "Assistance with approvals from government agencies, including:\n• <strong>Construction Plan Sanction</strong>\n• <strong>Temporary Electricity Connection</strong>\n• <strong>Permanent Electrical Connection</strong>\n• <strong>Water Connection</strong>\n• <strong>Sewage Connection</strong>",
    //   elevation:
    //     "<strong>Elevation Budget:</strong> 0.25% of the Project's Super Built-Up Cost",
    //   audit:
    //     "• <strong>Soil Testing:</strong> Additional charges\n• <strong>Site Supervision:</strong> Civil Engineer & Project Manager assigned\n• <strong>Architect Visits:</strong> Additional charges",
    // },
  });

  const packages = [
    {
      id: "package2500",
      title: "Basic Package Details",
      price: `Rs ${packageData.package_cost ? (packageData.package_cost / 1000).toFixed(0) + "K" : "Loading..."}`,
      color: "",
      gradient: "linear-gradient(135deg,rgb(101, 81, 77),rgb(124, 119, 119))",
      sections: [
        {
          id: "pkg2500One",
          title: "Design & Drawings",
          content: sectionContent.package2500.design,
        },
        {
          id: "pkg2500Two",
          title: "Construction Materials",
          content: sectionContent.package2500.materials,
        },
        {
          id: "pkg2500Three",
          title: "Flooring & Wall Tiling",
          content: sectionContent.package2500.flooring,
        },
        {
          id: "pkg2500Four",
          title: "Windows",
          content: sectionContent.package2500.windows,
        },
        {
          id: "pkg2500Five",
          title: "Doors",
          content: sectionContent.package2500.doors,
        },
        {
          id: "pkg2500Six",
          title: "Painting & Finishing",
          content: sectionContent.package2500.painting,
        },
        {
          id: "pkg2500Seven",
          title: "Fabrication Works",
          content: sectionContent.package2500.fabrication,
        },
        {
          id: "pkg2500Eight",
          title: "Plumbing & Sanitary",
          content: sectionContent.package2500.plumbing,
        },
        {
          id: "pkg2500Nine",
          title: "Extra Charges",
          content: sectionContent.package2500.extra,
        },
        {
          id: "pkg2500Ten",
          title: "Government Sanctions & Electrical Assistance",
          content: sectionContent.package2500.sanctions,
        },
        {
          id: "pkg2500Eleven",
          title: "Elevation Budget",
          content: sectionContent.package2500.elevation,
        },
        {
          id: "pkg2500Twelve",
          title: "Site Audit & Reporting",
          content: sectionContent.package2500.audit,
        },
      ],
    },
    // {
    //   id: "package2300",
    //   title: "Standard Package Details",
    //   price: `Rs ${packageData.package_cost_2300 ? (packageData.package_cost_2300 / 1000).toFixed(0) + "K" : "Loading..."}`,
    //   color: "",
    //   gradient: "linear-gradient(135deg,rgb(101, 81, 77),rgb(124, 119, 119))",
    //   sections: [
    //     {
    //       id: "pkg2300One",
    //       title: "Design & Drawings",
    //       content: sectionContent.package2300.design,
    //     },
    //     {
    //       id: "pkg2300Two",
    //       title: "Construction Materials",
    //       content: sectionContent.package2300.materials,
    //     },
    //     {
    //       id: "pkg2300Three",
    //       title: "Foundation",
    //       content: sectionContent.package2300.foundation,
    //     },
    //     {
    //       id: "pkg2300Four",
    //       title: "Flooring & Wall Tiling",
    //       content: sectionContent.package2300.flooring,
    //     },
    //     {
    //       id: "pkg2300Five",
    //       title: "Windows",
    //       content: sectionContent.package2300.windows,
    //     },
    //     {
    //       id: "pkg2300Six",
    //       title: "Doors",
    //       content: sectionContent.package2300.doors,
    //     },
    //     {
    //       id: "pkg2300Seven",
    //       title: "Painting & Finishing",
    //       content: sectionContent.package2300.painting,
    //     },
    //     {
    //       id: "pkg2300Eight",
    //       title: "Fabrication Works",
    //       content: sectionContent.package2300.fabrication,
    //     },
    //     {
    //       id: "pkg2300Nine",
    //       title: "Plumbing & Sanitary",
    //       content: sectionContent.package2300.plumbing,
    //     },
    //     {
    //       id: "pkg2300Ten",
    //       title: "Extra Charges",
    //       content: sectionContent.package2300.extra,
    //     },
    //     {
    //       id: "pkg2300Eleven",
    //       title: "Government Sanctions & Electrical Assistance",
    //       content: sectionContent.package2300.sanctions,
    //     },
    //     {
    //       id: "pkg2300Twelve",
    //       title: "Additional Information",
    //       content: sectionContent.package2300.additional,
    //     },
    //   ],
    // },
    // {
    //   id: "package2200",
    //   title: "Premium Package Details",
    //   price: `Rs ${packageData.package_cost_2200 ? (packageData.package_cost_2200 / 1000).toFixed(0) + "K" : "Loading..."}`,
    //   color: "",
    //   gradient: "linear-gradient(135deg,rgb(101, 81, 77),rgb(124, 119, 119))",
    //   sections: [
    //     {
    //       id: "pkg2200One",
    //       title: "Design & Drawings",
    //       content: sectionContent.package2200.design,
    //     },
    //     {
    //       id: "pkg2200Two",
    //       title: "Construction Materials",
    //       content: sectionContent.package2200.materials,
    //     },
    //     {
    //       id: "pkg2200Three",
    //       title: "Flooring & Wall Tiling",
    //       content: sectionContent.package2200.flooring,
    //     },
    //     {
    //       id: "pkg2200Four",
    //       title: "Windows",
    //       content: sectionContent.package2200.windows,
    //     },
    //     {
    //       id: "pkg2200Five",
    //       title: "Doors",
    //       content: sectionContent.package2200.doors,
    //     },
    //     {
    //       id: "pkg2200Six",
    //       title: "Painting & Finishing",
    //       content: sectionContent.package2200.painting,
    //     },
    //     {
    //       id: "pkg2200Seven",
    //       title: "Fabrication Works",
    //       content: sectionContent.package2200.fabrication,
    //     },
    //     {
    //       id: "pkg2200Eight",
    //       title: "Plumbing & Sanitary",
    //       content: sectionContent.package2200.plumbing,
    //     },
    //     {
    //       id: "pkg2200Nine",
    //       title: "Extra Charges",
    //       content: sectionContent.package2200.extra,
    //     },
    //     {
    //       id: "pkg2200Ten",
    //       title: "Government Sanctions & Electrical Assistance",
    //       content: sectionContent.package2200.sanctions,
    //     },
    //     {
    //       id: "pkg2200Eleven",
    //       title: "Elevation Budget",
    //       content: sectionContent.package2200.elevation,
    //     },
    //     {
    //       id: "pkg2200Twelve",
    //       title: "Site Audit & Reporting",
    //       content: sectionContent.package2200.audit,
    //     },
    //   ],
    // },
  ];

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <>
      <AdminDashboard />
      <Fade in={true} timeout={800}>
        <Box
          sx={{
            px: { xs: 2, sm: 4, md: 6 },
            pt: 4,
            maxWidth: "1200px",
            margin: "0 auto",
            pb: 2,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {packages.map((pkg, index) => (
            <Grow in={true} timeout={index * 200 + 400} key={pkg.id}>
              <Card
                sx={{
                  borderRadius: "16px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                  transition: "transform 0.4s, box-shadow 0.4s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                  },
                  border: "none",
                }}
              >
                <CardHeader
                  title={
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: "white",
                        fontSize: "1.6rem",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {pkg.title}
                    </Typography>
                  }
                  subheader={
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        color: "white",
                        mt: 1.5,
                        background: "rgba(255,255,255,0.2)",
                        display: "inline-block",
                        px: 3,
                        py: 1,
                        borderRadius: "20px",
                        backdropFilter: "blur(5px)",
                        fontSize: "1.5rem",
                      }}
                    >
                      {pkg.price}
                    </Typography>
                  }
                  sx={{
                    background: pkg.gradient,
                    padding: "30px 20px",
                    textAlign: "center",
                    position: "relative",
                    "&:after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "100px",
                      height: "4px",
                      backgroundColor: "rgba(255,255,255,0.5)",
                      borderRadius: "2px",
                    },
                  }}
                />
                <Box sx={{ background: "#fff" }}>
                  {pkg.sections.map((section) => (
                    <Accordion
                      key={section.id}
                      expanded={expanded[pkg.id] === section.id}
                      onChange={handleChange(section.id, pkg.id)}
                      sx={{
                        "&:before": { display: "none" },
                        boxShadow: "none",
                        borderBottom: "1px solid rgba(0,0,0,0.05)",
                        backgroundColor:
                          expanded[pkg.id] === section.id
                            ? "rgba(74, 0, 224, 0.03)"
                            : "transparent",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "rgba(74, 0, 224, 0.03)",
                        },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={
                          expanded[pkg.id] === section.id ? (
                            <RemoveIcon sx={{ color: pkg.color }} />
                          ) : (
                            <AddIcon sx={{ color: "#666" }} />
                          )
                        }
                        aria-controls={`${section.id}-content`}
                        id={`${section.id}-header`}
                        sx={{
                          padding: "0 25px",
                          minHeight: "68px !important",
                          "& .MuiAccordionSummary-content": {
                            margin: "12px 0",
                            alignItems: "center",
                          },
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: 600,
                            color:
                              expanded[pkg.id] === section.id
                                ? pkg.color
                                : "#444",
                            fontSize: "1.2rem",
                            letterSpacing: "0.2px",
                          }}
                        >
                          {section.title}
                        </Typography>
                        <IconButton
                          onClick={() => {
                            if (editingField === `${pkg.id}-${section.id}`) {
                              handleSave(pkg.id, section.id);
                            } else {
                              handleEdit(
                                pkg.id,
                                section.id,
                                editableContent[`${pkg.id}-${section.id}`] ||
                                  section.content
                              );
                            }
                          }}
                          sx={{ marginLeft: "auto" }}
                        >
                          {editingField === `${pkg.id}-${section.id}` ? (
                            <SaveIcon />
                          ) : (
                            <EditIcon />
                          )}
                        </IconButton>
                      </AccordionSummary>
                      <AccordionDetails
                        sx={{
                          padding: "0 25px 25px",
                          backgroundColor: "#fff",
                          borderLeft: `3px solid ${pkg.color}`,
                          marginLeft: "25px",
                          marginBottom: "15px",
                          borderRadius: "0 8px 8px 0",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            color: "#555",
                            textAlign: "left",
                            lineHeight: "1.8",
                            fontSize: "0.95rem",
                            whiteSpace: "pre-line",
                          }}
                        >
                          {renderContentWithEditableRupeeValues(
                            pkg.id,
                            section.id,
                            editingField === `${pkg.id}-${section.id}`
                              ? tempContent[`${pkg.id}-${section.id}`]
                              : editableContent[`${pkg.id}-${section.id}`] ||
                                  section.content
                          )}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
              </Card>
            </Grow>
          ))}
        </Box>
      </Fade>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ConstructionPackages;