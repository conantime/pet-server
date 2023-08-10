"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_TYPE = void 0;
var API_TYPE;
(function (API_TYPE) {
    API_TYPE["inpainting"] = "cleanup";
    API_TYPE["Remove_Background"] = "remove-background";
    API_TYPE["image_upscaling"] = "image-upscaling";
    API_TYPE["remove_text"] = "remove-text";
    API_TYPE["text_to_image"] = "text-to-image";
    API_TYPE["replace_background"] = "replace-background";
    API_TYPE["portrait_depth_estimation"] = "portrait-depth-estimation";
    API_TYPE["portrait_surface_normals"] = "portrait-surface-normals";
    API_TYPE["super_resolution"] = "super_resolution";
})(API_TYPE || (exports.API_TYPE = API_TYPE = {}));
