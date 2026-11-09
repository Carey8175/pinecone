// Modified for pinecone; see NOTICE.
import { penpalParent } from "..";

export function setFrameId(frameId: string) {
    (window as any)._pineconeFrameId = frameId;
}

export function getFrameId(): string {
    const frameId = (window as any)._pineconeFrameId;
    if (!frameId) {
        console.warn('Frame id not found');
        penpalParent?.getFrameId().then((id) => {
            setFrameId(id);
        });
        return '';
    }
    return frameId;
}

export function setBranchId(branchId: string) {
    (window as any)._pineconeBranchId = branchId;
}

export function getBranchId(): string {
    const branchId = (window as any)._pineconeBranchId;
    if (!branchId) {
        console.warn('Branch id not found');
        penpalParent?.getBranchId().then((id) => {
            setBranchId(id);
        });
        return '';
    }
    return branchId;
}
