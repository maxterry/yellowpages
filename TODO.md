# TODO

## General / Design
- [x] Switch to useParams or useLocation
- [x] Add top logo element
- [x] Adjust background of tag emoji logos
- [x] Optimize dark style
- [x] Add dark/light toggle
- [ ] Improve dark/light logic
- [ ] Fully cover light theme styling
- [ ] Factor out CompanyData and TagData as services

## Home
- [x] Add logo
- [x] Add non-functional search bar
- [x] Add dark/light toggle button with sun/moon

## Companies
- [x] Add CompanyCard (CompanyPreview?) component, for Home and TagDetail
- [x] Style CompanyDetail
- [x] Style TagDetail
- [x] Add map to CompanyDetail
- [*] HubSpot data -> CompanyData
- [ ] Add Alaska and Hawaii cutouts to map; limit extents

## Tags
- [x] Add TagData
- [x] Replace tag objs with slug strs in CompanyData
- [x] Try adding emoji to each CompanyTag too along with TagDetail
- [ ] Add to TagData (industry info, etc.)

## Locations
- [x] Add CompanyLocations
- [ ] Denormalize outta CompanyData to LocationData
- [ ] Add StateData
- [ ] Add LocaleData (Locality?)
- [ ] Add ZIPCodeData
- [ ] Add USPSRouteData
- [ ] Add AreaCodeData
- [ ] Consider PhoneNumberData
