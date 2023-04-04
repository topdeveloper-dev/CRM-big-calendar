import React, { useState } from "react";

import DataTable from "react-data-table-component";
import { FaPhone } from "react-icons/fa";
import { MdEmail, MdOutlinePersonAddAlt } from "react-icons/md";
import { Button, Container, Chip, Popper, Card } from "@mui/material";
import SearchField from "../../../components/common/search/SearchField";

const data = [
  {
    id: 1,
    name: "John Doe",
    phone: "+1 123-456-7890",
    email: "johndoe@gmail.com",
    created: "1/1/2020",
    lastActivity: "1 week ago",
    tags: "tag1, tag2, tag3",
  },
  {
    id: 2,
    name: "Jane Smith",
    phone: "+1 123-456-7890",
    email: "janesmith@gmail.com",
    created: "1/1/2020",
    lastActivity: "1 week ago",
    tags: "tag1, tag2",
  },
  {
    id: 3,
    name: "Bob Johnson",
    phone: "+1 123-456-7890",
    email: "bobjohnson@gmail.com",
    created: "1/1/2020",
    lastActivity: "1 week ago",
    tags: "tag1, tag2",
  },
  {
    id: 4,
    name: "Emily Brown",
    phone: "+1 123-456-7890",
    email: "emilybrown@gmail.com",
    created: "1/1/2020",
    lastActivity: "1 week ago",
    tags: "tag1, tag2",
  },
  {
    id: 5,
    name: "Michael Davis",
    phone: "+1 123-456-7890",
    email: "michaeldavis@gmail.com",
    created: "1/1/2020",
    lastActivity: "1 week ago",
    tags: "tag1, tag2",
  },
  {
    id: 6,
    name: "Jessica Wilson",
    phone: "+1 123-456-7890",
    email: "jessicawilson@gmail.com",
    created: "1/1/2020",
    lastActivity: "1 week ago",
    tags: "tag1, tag2",
  },
  {
    id: 7,
    name: "Matthew Taylor",
    phone: "+1 123-456-7890",
    email: "matthewtaylor@gmail.com",
    created: "1/1/2020",
    lastActivity: "1 week ago",
    tags: "tag1, tag2",
  },
  {
    id: 8,
    name: "David Anderson",
    phone: "+1 123-456-7890",
    email: "davidanderson@gmail.com",
    created: "1/1/2020",
    lastActivity: "1 week ago",
    tags: "tag1, tag2",
  },
  {
    id: 9,
    name: "Sarah Thomas",
    phone: "+1 123-456-7890",
    email: "sarahthomas@gmail.com",
    created: "1/1/2020",
    lastActivity: "1 week ago",
    tags: "tag1, tag2",
  },
  {
    id: 11,
    name: "Joshua Moore",
    phone: "+1 123-456-7890",
    email: "joshuamoore@gmail.com",
    created: "1/1/2020",
    lastActivity: "1 week ago",
    tags: "tag1, tag2",
  },
  {
    id: 12,
    name: "Joshua Moore",
    phone: "+1 123-456-7890",
    email: "joshuamoore@gmail.com",
    created: "1/1/2020",
    lastActivity: "1 week ago",
    tags: "tag1, tag2",
  },
  {
    id: 13,
    name: "Joshua Moore",
    phone: "+1 123-456-7890",
    email: "joshuamoore@gmail.com",
    created: "1/1/2020",
    lastActivity: "1 week ago",
    tags: "tag1, tag2",
  },
  {
    id: 14,
    name: "Joshua Moore",
    phone: "+1 123-456-7890",
    email: "joshuamoore@gmail.com",
    created: "1/1/2020",
    lastActivity: "1 week ago",
    tags: "tag1, tag2",
  },
  {
    id: 15,
    name: "Joshua Moore",
    phone: "+1 123-456-7890",
    email: "joshuamoore@gmail.com",
    created: "1/1/2020",
    lastActivity: "1 week ago",
    tags: "tag1, tag2",
  },
  {
    id: 16,
    name: "Joshua Moore",
    phone: "+1 123-456-7890",
    email: "joshuamoore@gmail.com",
    created: "1/1/2020",
    lastActivity: "1 week ago",
    tags: "tag1, tag2",
  },
];

const Contacts = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentTags, setCurrentTags] = useState([]);
  const [open, setOpen] = useState(false);

  const handleTagMoreClick = (event, tags) => {
    setAnchorEl(event.currentTarget);
    setCurrentTags(tags.split(","));
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCurrentTags([]);
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      sortable: true,
      cell: (row) => {
        return (
          <div className="w-full">
            <FaPhone
              className="w-3 h-3 mr-2"
              style={{
                display: "inline-block",
                verticalAlign: "middle",
                color: "green",
              }}
            />
            <span
              style={{
                display: "inline-block",
                width: "calc(100% - 1.5rem)",
              }}
            >
              {row.phone}
            </span>
          </div>
        );
      },
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
      cell: (row) => {
        return (
          <div className="w-full">
            <MdEmail
              className="w-3 h-3 mr-2"
              style={{
                display: "inline-block",
                verticalAlign: "middle",
                color: "#81D4FA",
              }}
            />
            <span
              style={{
                display: "inline-block",
                width: "calc(100% - 1.5rem)",
              }}
            >
              {row.email}
            </span>
          </div>
        );
      },
    },
    {
      name: "Created",
      selector: (row) => row.created,
      sortable: true,
    },
    {
      name: "Last Activity",
      selector: (row) => row.lastActivity,
      sortable: true,
    },
    {
      name: "Tags",
      selector: (row) => row.tags,
      sortable: true,
      cell: (row) => {
        const tags = row.tags.split(",");
        return (
          <div>
            {tags.slice(0, 2).map((str) => (
              <Chip key={str} label={str} clickable sx={{ mr: 1, mb: 1 }} />
            ))}
            {tags.length > 2 && (
              <Chip
                label={`+${tags.length - 2}`}
                clickable
                onClick={(event) => handleTagMoreClick(event, row.tags)}
                sx={{ mr: 1, mb: 1 }}
              />
            )}
            <Popper open={open} anchorEl={anchorEl} placement="bottom">
              <Card variant="outlined" className="p-4">
                <div style={{ maxHeight: "200px", overflowY: "scroll" }}>
                  {currentTags.slice(2).map((tag) => (
                    <Chip key={tag} label={tag} sx={{ mr: 1, mb: 1 }} />
                  ))}
                </div>
              </Card>
            </Popper>
          </div>
        );
      },
    },
  ];

  return (
    <div className="bg-light-indigo min-h-[100vh] max-h-[100vh] overflow-y-scroll pr-0 mr-0">
      <div className="flex flex-wrap items-center justify-between pt-5 md:gap-3 gap-2 px-3 md:px-4">
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">Contacts</h2>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="contained" color="primary">
            <MdOutlinePersonAddAlt className="w-4 h-4 text-white mr-2" />
            Add Contact
          </Button>
        </div>
      </div>
      <div className="bg-light-indigo flex flex-wrap items-center justify-end pt-5  md:gap-3 gap-2 px-3 md:px-4">
        <SearchField
          width="w-[300px]"
          customStyle="border border-gray-200 focus:border focus:border-primary-300"
          placeholder="Quick search"
        />
        <DataTable
          columns={columns}
          data={data}
          pagination
          selectableRows
          className="bg-white shadow-xl rounded-3xl border border-gray-50"
        />
      </div>
      <Container sx={{ margin: "128px" }}></Container>
    </div>
  );
};

export default Contacts;
