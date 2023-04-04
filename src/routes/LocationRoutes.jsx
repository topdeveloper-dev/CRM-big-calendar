import React from "react";
import { Routes, Route } from "react-router-dom";
import Conversations from "../pages/locations/conversations/Conversations";
import Contacts from "../pages/locations/contacts/Contacts";
import UnderConst from "../pages/underConst/UnderConst";
import Calendar from "../pages/locations/calendar/Calendar";

const LocationRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UnderConst />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/conversations" element={<Conversations />} />
        <Route path="/manual-actions" element={<UnderConst />} />
        <Route path="/bulk-actions" element={<UnderConst />} />
        <Route path="/opportunities" element={<UnderConst />} />
        <Route path="/pipeline" element={<UnderConst />} />
        <Route path="/workflows" element={<UnderConst />} />
        <Route path="/campaigns" element={<UnderConst />} />
        <Route path="/settings/business-profile" element={<UnderConst />} />
        <Route path="/settings/company-billing" element={<UnderConst />} />
        <Route path="/settings/my-staff" element={<UnderConst />} />
        <Route path="/settings/pipelines" element={<UnderConst />} />
        <Route path="/settings/calendars/main" element={<UnderConst />} />
        <Route
          path="/settings/calendars/preferences"
          element={<UnderConst />}
        />
        <Route
          path="/settings/calendars/availability"
          element={<UnderConst />}
        />
        <Route
          path="/settings/calendars/connections"
          element={<UnderConst />}
        />
        <Route path="/settings/phoneNumbers/manage" element={<UnderConst />} />
        <Route
          path="/settings/phoneNumbers/usageSummary"
          element={<UnderConst />}
        />
        <Route
          path="/settings/phoneNumbers/regulatory-bundles"
          element={<UnderConst />}
        />
        <Route
          path="/settings/phoneNumbers/tollfree-registration"
          element={<UnderConst />}
        />
        <Route path="/under-const" element={<UnderConst />} />
      </Routes>
    </div>
  );
};

export default LocationRoutes;
