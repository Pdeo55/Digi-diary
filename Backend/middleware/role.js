const AccessControl = require("accesscontrol");
const ac = new AccessControl();

const role = () => {
  ac.grant("STUDENT").readOwn("profile").updateOwn("profile");
  ac.grant("TEACHER").extend("STUDENT").readAny("profile");
  ac.grant("ADMIN")
    .extend("STUDENT")
    .extend("TEACHER")
    .updateAny("profile")
    .deleteAny("profile");

    return ac;
};
module.exports = {role};