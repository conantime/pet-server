export interface BASE_API {
    image_file: ImageData,
    mask_file?: ImageData,
    target_width?: number,
    target_height?: number,
    strategy?: string,
    prompt?: string,
    upscale?: string,
}

export enum API_TYPE {
    inpainting = 'cleanup',
    Remove_Background = 'remove-background',
    image_upscaling = 'image-upscaling',
    remove_text = 'remove-text',
    text_to_image = 'text-to-image',
    replace_background = 'replace-background',
    portrait_depth_estimation='portrait-depth-estimation',
    portrait_surface_normals = 'portrait-surface-normals',
    super_resolution = 'super_resolution'
}