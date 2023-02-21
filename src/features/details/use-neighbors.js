import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadNeighboursByBorder, selectNeighbours } from './details-slice'

export const useNeighbors = (borders = []) => {
  const dispatch = useDispatch()
  const neighbors = useSelector(selectNeighbours)
  
  useEffect(() => {
    if (borders.length) {
      dispatch(loadNeighboursByBorder(borders))
    }
  }, [borders, dispatch])

  return neighbors;
}