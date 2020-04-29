<tr>
    <td></td>
    <td>@if($show) <input name="name" class="form-control" value="{{$user['name'] ?? null}}" wire:model="name" /> @else {{$user['name']}} @endif</td>
    <td>@if($show) <input name="mobile" class="form-control" value="{{$user['mobile'] ?? null}}" wire:model="mobile" /> @else {{$user['mobile']}} @endif</td>
    <td>@if($show) <input name="country" class="form-control" value="{{$user['country'] ?? null}}" wire:model="country" /> @else {{$user['country']}} @endif</td>
    <td>@if($show) <input name="pan" class="form-control" value="{{$user['pan'] ?? null}}" wire:model="pan" /> @else {{$user['pan']}} @endif</td>
    <td>@if($show) <input name="email" class="form-control" value="{{$user['email'] ?? null}}" wire:model="email" /> @else {{$user['email']}} @endif</td>
    <td>
        @if($show) <p class="btn btn-dark btn-sm" wire:click="update()">Update</p> @else <p class="btn btn-primary btn-sm" wire:click="show()">Edit</p> @endif
    </td>
</tr>