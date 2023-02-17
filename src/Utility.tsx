export function MergeRefs<T = any>(
refs: Array<React.MutableRefObject<T> | React.LegacyRef<T>>
): React.RefCallback<T> {
    return (value) => {
        refs.forEach((ref) => {
        if (typeof ref === "function") {
            ref(value);
        } else if (ref != null) {
            (ref as React.MutableRefObject<T | null>).current = value;
        }
        });
    };
}

export function FormDataToObject(formData: FormData): any {
    const obj: any = {}
    for (let [key, value] of formData.entries()) {
        obj[key] = value
    }
    return obj
}