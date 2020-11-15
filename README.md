# snork w/ jorms

## redux-addon branch
- initial store tree shape
  - items for global tree
    - game state toggle for start/pause
      - string.
    - gridStats
      - squares array
        - x int
        - y int
        - hasFood bool

### action names
- START_GAME
- PAUSE_GAME
- GAME_OVER
- MOVE FOOD


### steps to redux hello world.
- import libs redux and react redux.
- create store
- create reducer combiner.
  - game state toggle reducer.
  - gridStats reducer.
- create actions ( follow action names above )
- test fire actions on button clicks.
