import { useEffect, useCallback } from "react";
import debounce from "lodash/debounce";
import { useSelector, useDispatch } from "react-redux";
import { onGrabData, setData } from "../redux/actions/rootActions";

const INTERSECTION_THRESHOLD = 5;
const LOAD_DELAY_MS = 500;

const useLazyLoad = ({ triggerRef, onGettingData, options }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const _handleEntry = async (entry) => {
    const boundingRect = entry.boundingClientRect;
    const intersectionRect = entry.intersectionRect;

    if (
      !state.loading &&
      entry.isIntersecting &&
      intersectionRect.bottom - boundingRect.bottom <= INTERSECTION_THRESHOLD
    ) {
      dispatch(setData({ loading: true }));
      const data = await onGettingData(state.currentPage);
      dispatch(onGrabData({ data }));
    }
  };
  const handleEntry = debounce(_handleEntry, LOAD_DELAY_MS);

  const onIntersect = useCallback(
    (entries) => {
      handleEntry(entries[0]);
    },
    [handleEntry]
  );

  useEffect(() => {
    if (triggerRef.current) {
      const container = triggerRef.current;
      const observer = new IntersectionObserver(onIntersect, options);

      observer.observe(container);

      return () => {
        observer.disconnect();
      };
    }
  }, [triggerRef, onIntersect, options]);

  return state;
};

export default useLazyLoad;
