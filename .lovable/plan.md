

## Plan: Replace Second Photo on Master Diploma Page

### Changes

1. **Save uploaded image** as `src/assets/master-interior-learning-2.png`

2. **Create `src/components/diploma/MasterInteriorDesign/MasterInteriorPhotosSection.tsx`** — copy of the shared `DiplomaPhotosSection` but with the second image replaced by the new uploaded asset (imported as ES6 module). Other 3 images remain as the shared generic ones.

3. **Update `src/pages/diploma/DiplomaProgramMasterInteriorDesign.tsx`** — swap `DiplomaPhotosSection` import to the new `MasterInteriorPhotosSection`.

