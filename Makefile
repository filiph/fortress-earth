EARTH_WITHOUT_WATER=https://www.naturalearthdata.com/http//www.naturalearthdata.com/download/10m/raster/NE2_HR_LC.zip
EARTH_WITH_WATER=https://www.naturalearthdata.com/http//www.naturalearthdata.com/download/10m/raster/NE2_HR_LC_SR_W_DR.zip

build: parse_map
	@echo "Project built."

parse_map: assets/NE2_HR_LC/NE2_HR_LC.tif assets/NE2_HR_LC_SR_W_DR/NE2_HR_LC_SR_W_DR.tif
	dart tool/parse_map.dart assets/NE2_HR_LC_SR_W_DR/NE2_HR_LC_SR_W_DR.tif \
    		--water-map assets/NE2_HR_LC/NE2_HR_LC.tif --bottom-trim 15     \
    		> lib/src/data/earth_terrain.part.dart

assets/NE2_HR_LC/NE2_HR_LC.tif: assets/NE2_HR_LC.zip
	unzip assets/NE2_HR_LC.zip -d assets

assets/NE2_HR_LC_SR_W/NE2_HR_LC_SR_W.tif: assets/NE2_HR_LC_SR_W.zip
	unzip assets/NE2_HR_LC_SR_W.zip -d assets

assets/NE2_HR_LC.zip:
	@echo "Downloading Earth surface without water."
	curl -L -o assets/NE2_HR_LC.zip $(EARTH_WITHOUT_WATER)

assets/NE2_HR_LC_SR_W.zip:
	@echo "Downloading Earth surface with water."
	curl -L -o assets/NE2_HR_LC_SR_W.zip $(EARTH_WITH_WATER)