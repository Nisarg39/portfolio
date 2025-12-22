# Mac Monitor 3D Model Download Instructions

## Steps to Download and Setup the Mac Monitor Model

1. **Download the Model:**
   - Visit: https://clara.io/view/9169806c-d6fe-40e2-aedb-84c7ca948b6d
   - Click the "Download" button
   - Select "Wavefront OBJ (.obj)" format
   - Save the file as `mac_monitor.obj`

2. **Convert OBJ to GLTF:**
   Since the project uses GLTF format, you need to convert the OBJ file:
   
   **Option A: Using Blender (Recommended)**
   - Open Blender
   - File → Import → Wavefront (.obj)
   - Select your `mac_monitor.obj` file
   - File → Export → glTF 2.0 (.glb/.gltf)
   - Choose "glTF Separate (.gltf + .bin + textures)"
   - Save as `scene.gltf` in `public/mac_monitor/` directory
   
   **Option B: Using Online Converter**
   - Visit: https://products.aspose.app/3d/conversion/obj-to-gltf
   - Upload your OBJ file
   - Download the GLTF files
   - Extract to `public/mac_monitor/` directory

3. **Place Files:**
   - Create directory: `public/mac_monitor/`
   - Place `scene.gltf`, `scene.bin`, and any texture files in this directory
   - The structure should match: `public/mac_monitor/scene.gltf`

4. **Test:**
   - Run `npm run dev`
   - Check the Hero section - the Mac monitor should appear instead of the CSS-based computer UI
