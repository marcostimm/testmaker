<?php

namespace App\Models;
use Auth;

/**
 * UserScopeTrait Trait
 *
 * Trait for handler with query of particular user objects.
 * Their method inject a user_id in where clause.
 *
 * @category Models
 * @package  TestMaker
 * @author   Marcos Timm <timm@marcos.im>
 * @license  Copyright (C)
 * @link     https://marcos.im
 */
trait UserScopeTrait {

    /**
     * UserScopeTrait Class
     *
     * Inject a user_id in where clause. 
     *
     * @category Models
     * @package  TestMaker
     * @author   Marcos Timm <timm@marcos.im>
     * @license  Copyright (C)
     * @link     https://marcos.im
    */
    public function apply( Builder $builder, Model $model )
    {
        dd(1);
        $user = Auth::User();
        $builder->where('user_id', '=', $user->id);
    }

}