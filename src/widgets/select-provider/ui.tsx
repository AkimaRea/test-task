import { useDispatch, useSelector } from 'react-redux';

import { ResetProviderFilterButton } from 'features/reset-provider-filter';

import { gameActions, selectProviderFilterOption, selectProviderOptions } from 'entities/game';

import { Select } from 'shared/ui';

export const SelectProvider = () => {
  const dispatch = useDispatch();
  const options = useSelector(selectProviderOptions);
  const current = useSelector(selectProviderFilterOption);

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Select
        options={options}
        activeOption={current}
        setActiveOption={value => dispatch(gameActions.setProviderFilter(value || null))}
      />
      {current.value && <ResetProviderFilterButton />}
    </div>
  );
};
